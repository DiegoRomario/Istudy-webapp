import { CycleLog, CycleLogViewModel } from './../is-models/cycle-log';
import { BaseService } from './../core/base/services/base.service';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CycleLogService extends BaseService<CycleLog, CycleLogViewModel> {

  constructor(protected injector: Injector) {
    super('cycleLog', injector);
   }

}
