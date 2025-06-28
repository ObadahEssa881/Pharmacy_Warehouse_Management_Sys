// src/dataProvider.ts
import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const API_URL = 'http://localhost:3333';

const httpClient = async (url: string, options: any = {}) => {
  const token = localStorage.getItem('token');

  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(API_URL, httpClient);
