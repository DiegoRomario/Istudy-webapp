import { CurrentCycleConfigurationService } from './../current-cycle-configuration.service';
import { CycleConfiguration } from './../../is-models/cycle';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentCycleConfigurationResolver implements Resolve<Observable<CycleConfiguration>> {

    // tslint:disable-next-line: max-line-length
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CycleConfiguration> | Observable<Observable<CycleConfiguration>> | Promise<Observable<CycleConfiguration>> {
        return this.currentCycleConfigurationService.listConfigurationsCycle();
    }

    constructor(private currentCycleConfigurationService: CurrentCycleConfigurationService) {

    }
}
