
// import { fetchUtils } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';

// const API_URL = 'http://localhost:3333';

// const httpClient = async (url: string, options: any = {}) => {
//   const token = localStorage.getItem('token');

//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'application/json' });
//   }

//   // Force set Authorization header (Postman style)
//   if (token) {
//     options.headers.set('Authorization', `Bearer ${token}`);
//   }

//   console.log('🔐 Using token:', token); // ✅ log token
//   console.log('📡 Request URL:', url);
//   console.log('📨 Headers:', options.headers);

//   return fetchUtils.fetchJson(url, options);
// };

// const defaultDataProvider = simpleRestProvider(API_URL, httpClient);

// export const dataProvider = {
//   ...defaultDataProvider,

//   getList: async (resource: string, params: any) => {
//     const { json } = await httpClient(`${API_URL}/${resource}`);
//     return {
//       data: json.data,
//       total: json.total,
//     };
//   },

//   getOne: async (resource: string, params: any) => {
//     const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`);
//     return {
//       data: json,
//     };
//   },
// };

// // // src/dataProvider.ts
// // import simpleRestProvider from 'ra-data-simple-rest';
// // import { fetchUtils } from 'react-admin';

// // const API_URL = 'http://localhost:3333';
// // const httpClient = async (url: string, options: any = {}) => {
// //   const token = localStorage.getItem('token');
// //   options.headers = options.headers ?? new Headers({ Accept: 'application/json' });
// //   if (token) options.headers.set('Authorization', `Bearer ${token}`);
// //   return fetchUtils.fetchJson(url, options);
// // };
// // const defaultProvider = simpleRestProvider(API_URL, httpClient);

// // export const dataProvider = {
// //   ...defaultProvider,
// //   getList: async (resource: string, params: any) => {
// //     // ignore backend filtering, just call base
// //     const response = await defaultProvider.getList(resource, params);
// //     return response;
// //   },
// // };
import { fetchUtils, DataProvider } from 'react-admin';

const apiUrl = 'http://localhost:3000'; // replace with your NestJS URL
const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider: DataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      _page: page,
      _limit: perPage,
      _sort: field,
      _order: order,
      ...params.filter,
    };
    const url = `${apiUrl}/${resource}?${fetchUtils.queryParameters(query)}`;
    return httpClient(url).then(({ json }) => ({
      data: json.data || json,
      total: json.total || json.length,
    }));
  },
  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({ data: json })),
  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),
  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),
  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, { method: 'DELETE' }).then(({ json }) => ({ data: json })),
  // Add custom endpoints (reports)
  customMethod: (endpoint: string, options: any) => httpClient(`${apiUrl}/${endpoint}`, options),
};
