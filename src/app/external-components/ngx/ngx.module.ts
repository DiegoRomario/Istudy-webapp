import { ComponentsModule } from './../../is-components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down/count-down.component';
import { CountdownModule } from 'ngx-countdown';
@NgModule({
  declarations: [CountDownComponent],
  exports: [CountDownComponent],
  imports: [
    CommonModule,
    CountdownModule,
    ComponentsModule
  ]
})
export class NgxModule { }
