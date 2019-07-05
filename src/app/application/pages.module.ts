import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConfigurationCycleComponent } from './configuration-cycle/configuration-cycle.component';
import { CycleComponent } from './cycle/cycle.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, ConfigurationCycleComponent, CycleComponent],
  exports: [HomeComponent, ConfigurationCycleComponent, CycleComponent],
  imports: [
    CommonModule, ComponentsModule
  ]
})
export class PagesModule { }
