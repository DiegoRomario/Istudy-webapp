import { DataConfiguration } from './../../../is-models/data-configurations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'ngb-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.css']
})
export class TableBasicComponent  {
  @Input() data: any[] = [];
  @Input() dataConfigurations: DataConfiguration[] = [];
  @Input() idField = 'Id';
  @Output() originAction = new EventEmitter<string> ();

  Action(row: any) {
    this.originAction.emit(row[this.idField]);
  }
}
