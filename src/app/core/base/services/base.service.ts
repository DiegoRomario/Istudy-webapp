import { ConfigurationApiService } from './../../../is-services/configuration-api.service';
import { HttpClient } from '@angular/common/http';
import { BaseModel } from '../models/base-model';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BaseService<M extends BaseModel, V extends BaseModel> {

    protected http: HttpClient;
    configurationApi = environment.apiUrl;
    constructor(protected apiPath: string,
                protected injector: Injector
    ) {
        this.http = injector.get(HttpClient);
    }

    listAll() {
        return this.http.get<V[]>(this.configurationApi + this.apiPath);
    }
    getById(Id: number) {
        return this.http.get<M>(this.configurationApi + this.apiPath + '/' + Id);
    }

    save(model: M) {
        if (model.Id > 0) {
          return this.http.put(this.configurationApi + this.apiPath +  '/' + model.Id, model);
        } else {
          return this.http.post(this.configurationApi + this.apiPath + '/', model);
        }
      }

}
