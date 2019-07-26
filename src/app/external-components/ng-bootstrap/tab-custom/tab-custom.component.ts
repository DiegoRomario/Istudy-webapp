import { TabCustomConfiguration } from './../../../is-models/tab-custom-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngb-tab-custom',
  templateUrl: './tab-custom.component.html',
  styleUrls: ['./tab-custom.component.css']
})
export class TabCustomComponent implements OnInit {

  // tslint:disable-next-line: new-parens
  // @Input() configTab: TabCustomConfiguration[] = [
  //   new TabCustomConfiguration('Tab 1', 'tab1'),
  //   new TabCustomConfiguration('Tab 2', 'tab2')
  // ];
  @Input() title1: string;
  @Input() title2: string;
  @Input() title3: string;
  @Input() title4: string;
  @Input() title5: string;

  constructor() { }

  ngOnInit() {
  }

}
