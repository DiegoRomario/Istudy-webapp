import { CycleConfigurationViewModel } from './../is-models/cycle';
import { BaseService } from './../core/base/services/base.service';
import { CycleConfiguration } from '../is-models/cycle';
import { ConfigurationApiService } from './configuration-api.service';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CycleConfigurationService extends BaseService<CycleConfiguration, CycleConfigurationViewModel> {

  constructor(protected injector: Injector) {
    super('cycleconfiguration', injector);
   }

  // listConfigurationsCycle() {
  //   return this.http.get<CycleConfiguration[]>(this.configurationApi.ApiUrl() + 'cycleconfiguration');
  // }
  // listConfigurationsCycleById(Id: number) {
  //   return this.http.get<CycleConfiguration>(this.configurationApi.ApiUrl() + 'cycleconfiguration/' + Id);
  // }
  // save(model: CycleConfiguration) {
  //   if (model.Id > 0) {
  //     return this.http.put(this.configurationApi.ApiUrl() + 'cycleconfiguration/' + model.Id, model);
  //   } else {
  //     return this.http.post(this.configurationApi.ApiUrl() + 'cycleconfiguration/', model);
  //   }
  // }

}
