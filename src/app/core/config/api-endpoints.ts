import { environment } from '../../../environments/environment';

export const API_ENDPOINTS = {
  products: `${environment.apiBaseUrl}/products`,
  users: `${environment.apiBaseUrl}/users`,
  orders: `${environment.apiBaseUrl}/orders`
};