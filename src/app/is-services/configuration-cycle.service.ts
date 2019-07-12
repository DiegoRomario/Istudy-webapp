import { CycleViewModel } from './../is-models/cycle';
import { ConfigurationApiService } from './configuration-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationCycleService {

  constructor(private http: HttpClient, private configurationApi: ConfigurationApiService) { }

  listConfigurationsCycle() {
    return this.http.get<CycleViewModel[]>(this.configurationApi.ApiUrl() + 'cycle');
  }
  listConfigurationsCycleById(Id: number) {
    return this.http.get<CycleViewModel>(this.configurationApi.ApiUrl() + 'cycle/' + Id);
  }
}
