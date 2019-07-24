import { CycleViewModel, Cycle } from './../is-models/cycle';
import { ConfigurationApiService } from './configuration-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

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
  save(model: Cycle) {
    if (model.Id > 0) {
      return this.http.put(this.configurationApi.ApiUrl() + 'cycle/' + model.Id, model);
    } else {
      return this.http.post(this.configurationApi.ApiUrl() + 'cycle/', model);
    }
  }

}
