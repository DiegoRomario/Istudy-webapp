import { Cycle } from './../../../is-models/cycle';
import { Component } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'ngb-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.css']
})
export class TableBasicComponent  {

   cycle: Cycle[] = [
    {
      Id: '1',
      User: 'Diego',
      Description: 'Pomodoro',
      Cycle: 25,
      ShortBreak: 5,
      LongBreak: 15,
      Summary: 4
    },
    {
      Id: '2',
      User: 'Tabata',
      Description: '18 min',
      Cycle: 18,
      ShortBreak: 10,
      LongBreak: 18,
      Summary: 10
    },
    {
      Id: '3',
      User: 'Joey',
      Description: 'Summary',
      Cycle: 30,
      ShortBreak: 4,
      LongBreak: 15,
      Summary: 10
    }
  ];
}
