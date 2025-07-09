// src/dataProvider.ts
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const API_URL = 'http://localhost:3333';

const httpClient = async (url: string, options: any = {}) => {
  const token = localStorage.getItem('token');

  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  // Force set Authorization header (Postman style)
  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  console.log('🔐 Using token:', token); // ✅ log token
  console.log('📡 Request URL:', url);
  console.log('📨 Headers:', options.headers);

  return fetchUtils.fetchJson(url, options);
};

const defaultDataProvider = simpleRestProvider(API_URL, httpClient);

export const dataProvider = {
  ...defaultDataProvider,

  getList: async (resource: string, params: any) => {
    const { json } = await httpClient(`${API_URL}/${resource}`);
    return {
      data: json.data,
      total: json.total,
    };
  },

  getOne: async (resource: string, params: any) => {
    const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`);
    return {
      data: json,
    };
  },
};
