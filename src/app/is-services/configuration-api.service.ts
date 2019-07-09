import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationApiService {

  constructor() { }

  ApiUrl() {
    return environment.apiUrl;
  }

}
