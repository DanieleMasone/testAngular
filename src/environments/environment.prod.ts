import { ApiConfig } from '../app/models/environment.api';

export const environment: {
  production: boolean;
  api: ApiConfig;
} = {
  production: true,
  api: {
    host: '',
    path: '/api/rest'
  }
};
