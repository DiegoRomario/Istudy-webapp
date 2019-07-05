import { HomeComponent } from './application/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationCycleComponent } from './application/configuration-cycle/configuration-cycle.component';
import { CycleComponent } from './application/cycle/cycle.component';

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
