import { NgBootstrapModule } from './../external-components/ng-bootstrap/ng-bootstrap.module';
import { ComponentsModule } from './../is-components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConfigurationCycleComponent } from './configuration-cycle/configuration-cycle.component';
import { CycleComponent } from './cycle/cycle.component';


@NgModule({
  declarations: [HomeComponent, ConfigurationCycleComponent, CycleComponent],
  exports: [HomeComponent, ConfigurationCycleComponent, CycleComponent],
  imports: [
    CommonModule, ComponentsModule, NgBootstrapModule
  ]
})
export class PagesModule { }
