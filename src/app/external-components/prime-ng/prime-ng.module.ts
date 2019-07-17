import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';


@NgModule({
  declarations: [DateTimePickerComponent],
  exports: [DateTimePickerComponent, CalendarModule],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ]

})
export class PrimeNgModule { }
