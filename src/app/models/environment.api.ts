import { InjectionToken } from "@angular/core";


export interface ApiConfig {
  host: string;
  path: string;
}


export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');
