import { CycleConfigurationViewModel } from './../is-models/cycle';
import { ConfigurationApiService } from './configuration-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CurrentCycleConfigurationService {
    constructor(private http: HttpClient, private configurationApi: ConfigurationApiService ) {}

    listConfigurationsCycle() {
        return this.http.get<CycleConfigurationViewModel>(this.configurationApi.ApiUrl() + 'CurrentCycleConfiguration');
      }
}