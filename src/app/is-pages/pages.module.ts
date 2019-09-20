import { NgxModule } from './../external-components/ngx/ngx.module';
import { PrimeNgModule } from './../external-components/prime-ng/prime-ng.module';
import { NgBootstrapModule } from './../external-components/ng-bootstrap/ng-bootstrap.module';
import { ComponentsModule } from './../is-components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CycleConfigurationComponent } from './cycle-configuration/cycle-configuration.component';
import { CycleComponent } from './cycle/cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CycleLogComponent } from './cycle-log/cycle-log.component';


@NgModule({
  declarations: [HomeComponent, CycleConfigurationComponent, CycleComponent, CycleLogComponent],
  exports: [HomeComponent, CycleConfigurationComponent, CycleComponent, CycleLogComponent],
  imports: [
    CommonModule, ComponentsModule, NgBootstrapModule, FormsModule,
    ReactiveFormsModule, PrimeNgModule, NgxModule
  ]
})
export class PagesModule { }
