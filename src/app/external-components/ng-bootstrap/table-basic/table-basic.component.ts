import { DataConfiguration } from './../../../is-models/data-configurations';
import { Component, Input } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'ngb-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.css']
})
export class TableBasicComponent  {
  @Input() Data: any[] = [];
  @Input() DataConfigurations: DataConfiguration[] = [];

}
