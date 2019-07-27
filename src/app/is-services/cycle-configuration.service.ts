import { CycleConfigurationViewModel, CycleConfiguration } from '../is-models/cycle';
import { ConfigurationApiService } from './configuration-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CycleConfigurationService {

  constructor(private http: HttpClient, private configurationApi: ConfigurationApiService) { }

  listConfigurationsCycle() {
    return this.http.get<CycleConfigurationViewModel[]>(this.configurationApi.ApiUrl() + 'cycleconfiguration');
  }
  listConfigurationsCycleById(Id: number) {
    return this.http.get<CycleConfigurationViewModel>(this.configurationApi.ApiUrl() + 'cycleconfiguration/' + Id);
  }
  save(model: CycleConfiguration) {
    if (model.Id > 0) {
      return this.http.put(this.configurationApi.ApiUrl() + 'cycleconfiguration/' + model.Id, model);
    } else {
      return this.http.post(this.configurationApi.ApiUrl() + 'cycleconfiguration/', model);
    }
  }

}
