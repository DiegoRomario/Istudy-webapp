import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { TabCustomComponent } from './tab-custom/tab-custom.component';

@NgModule({
  declarations: [TableBasicComponent, TabCustomComponent],
  exports: [NgbModule, TableBasicComponent, TabCustomComponent],
  imports: [
    CommonModule, BrowserModule, NgbModule
  ]
})
export class NgBootstrapModule { }
