import { CurrentCycleConfigurationService } from './../current-cycle-configuration.service';
import { CycleConfigurationViewModel } from './../../is-models/cycle';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentCycleConfigurationResolver implements Resolve<Observable<CycleConfigurationViewModel>> {

    // tslint:disable-next-line: max-line-length
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CycleConfigurationViewModel> | Observable<Observable<CycleConfigurationViewModel>> | Promise<Observable<CycleConfigurationViewModel>> {
        return this.currentCycleConfigurationService.listConfigurationsCycle();
    }

    constructor(private currentCycleConfigurationService: CurrentCycleConfigurationService) {

    }
}
