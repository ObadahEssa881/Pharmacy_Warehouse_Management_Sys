"use strict";
// import { fetchUtils } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.dataProvider = void 0;
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
var react_admin_1 = require("react-admin");
var apiUrl = 'http://localhost:3000'; // replace with your NestJS URL
var httpClient = function (url, options) {
    if (options === void 0) { options = {}; }
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Authorization', "Bearer " + localStorage.getItem('token'));
    return react_admin_1.fetchUtils.fetchJson(url, options);
};
exports.dataProvider = {
    getList: function (resource, params) {
        var _a = params.pagination, page = _a.page, perPage = _a.perPage;
        var _b = params.sort, field = _b.field, order = _b.order;
        var query = __assign({ _page: page, _limit: perPage, _sort: field, _order: order }, params.filter);
        var url = apiUrl + "/" + resource + "?" + react_admin_1.fetchUtils.queryParameters(query);
        return httpClient(url).then(function (_a) {
            var json = _a.json;
            return ({
                data: json.data || json,
                total: json.total || json.length
            });
        });
    },
    getOne: function (resource, params) {
        return httpClient(apiUrl + "/" + resource + "/" + params.id).then(function (_a) {
            var json = _a.json;
            return ({ data: json });
        });
    },
    create: function (resource, params) {
        return httpClient(apiUrl + "/" + resource, {
            method: 'POST',
            body: JSON.stringify(params.data)
        }).then(function (_a) {
            var json = _a.json;
            return ({ data: json });
        });
    },
    update: function (resource, params) {
        return httpClient(apiUrl + "/" + resource + "/" + params.id, {
            method: 'PATCH',
            body: JSON.stringify(params.data)
        }).then(function (_a) {
            var json = _a.json;
            return ({ data: json });
        });
    },
    "delete": function (resource, params) {
        return httpClient(apiUrl + "/" + resource + "/" + params.id, { method: 'DELETE' }).then(function (_a) {
            var json = _a.json;
            return ({ data: json });
        });
    },
    // Add custom endpoints (reports)
    customMethod: function (endpoint, options) { return httpClient(apiUrl + "/" + endpoint, options); }
};
