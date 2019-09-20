import { CycleLogService } from './../../is-services/cycle-log.service';
import { DataConfiguration } from './../../is-models/data-configurations';
import { CycleLogViewModel } from './../../is-models/cycle-log';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'is-cycle-log',
  templateUrl: './cycle-log.component.html',
  styleUrls: ['./cycle-log.component.css']
})
export class CycleLogComponent implements OnInit {

  @Input() logs: CycleLogViewModel[] = [];

  dataConfiguration: DataConfiguration[] = [
    new DataConfiguration('Id', 'Id'),
    new DataConfiguration('User', 'UserName'),
    new DataConfiguration('Cycle', 'CycleDescription'),
    new DataConfiguration('Note', 'Note'),
    new DataConfiguration('Action', 'Action'),
    new DataConfiguration('Date Log', 'DateLog', 'DataHora' )];

  constructor(private logService: CycleLogService) {
  }

  ngOnInit() {
    this.listLogs();
  }

  listLogs() {
    this.logService.listAll()
      .subscribe(logs => {
        this.logs = logs; console.log(this.logs);
      });
  }
  Back() {
    window.history.go(-1);
  }
}
