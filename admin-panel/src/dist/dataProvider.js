"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.dataProvider = void 0;
var react_admin_1 = require("react-admin");
var ra_data_simple_rest_1 = require("ra-data-simple-rest");
var API_URL = 'http://localhost:3333';
var httpClient = function (url, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            token = localStorage.getItem('token');
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            // Force set Authorization header (Postman style)
            if (token) {
                options.headers.set('Authorization', "Bearer " + token);
            }
            console.log('🔐 Using token:', token); // ✅ log token
            console.log('📡 Request URL:', url);
            console.log('📨 Headers:', options.headers);
            return [2 /*return*/, react_admin_1.fetchUtils.fetchJson(url, options)];
        });
    });
};
var defaultDataProvider = ra_data_simple_rest_1["default"](API_URL, httpClient);
exports.dataProvider = __assign(__assign({}, defaultDataProvider), { getList: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
        var json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, httpClient(API_URL + "/" + resource)];
                case 1:
                    json = (_a.sent()).json;
                    return [2 /*return*/, {
                            data: json.data,
                            total: json.total
                        }];
            }
        });
    }); }, getOne: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
        var json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, httpClient(API_URL + "/" + resource + "/" + params.id)];
                case 1:
                    json = (_a.sent()).json;
                    return [2 /*return*/, {
                            data: json
                        }];
            }
        });
    }); } });
// // src/dataProvider.ts
// import simpleRestProvider from 'ra-data-simple-rest';
// import { fetchUtils } from 'react-admin';
// const API_URL = 'http://localhost:3333';
// const httpClient = async (url: string, options: any = {}) => {
//   const token = localStorage.getItem('token');
//   options.headers = options.headers ?? new Headers({ Accept: 'application/json' });
//   if (token) options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// };
// const defaultProvider = simpleRestProvider(API_URL, httpClient);
// export const dataProvider = {
//   ...defaultProvider,
//   getList: async (resource: string, params: any) => {
//     // ignore backend filtering, just call base
//     const response = await defaultProvider.getList(resource, params);
//     return response;
//   },
// };
