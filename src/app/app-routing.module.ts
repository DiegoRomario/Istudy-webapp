import { CycleLogComponent } from './is-pages/cycle-log/cycle-log.component';
import { CurrentCycleConfigurationResolver } from './is-services/is-resolvers/current-cycle-configuration.resolve';
import { CycleConfigurationComponent } from './is-pages/cycle-configuration/cycle-configuration.component';
import { HomeComponent } from './is-pages/home/home.component';
import { CycleComponent } from './is-pages/cycle/cycle.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cycle-configuration', component: CycleConfigurationComponent },
  { path: 'cycle-log', component: CycleLogComponent },
  {
    path: 'cycle',
    component: CycleComponent,
    resolve: { currentConfiguration: CurrentCycleConfigurationResolver }
  },
  { path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
