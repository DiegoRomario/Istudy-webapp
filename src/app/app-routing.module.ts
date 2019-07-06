import { ConfigurationCycleComponent } from './is-pages/configuration-cycle/configuration-cycle.component';
import { HomeComponent } from './is-pages/home/home.component';
import { CycleComponent } from './is-pages/cycle/cycle.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'configuration-cycle', component: ConfigurationCycleComponent},
  {path: 'cycle', component: CycleComponent},
  {path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
