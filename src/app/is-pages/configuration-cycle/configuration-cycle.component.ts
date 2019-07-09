import { DataConfiguration } from './../../is-models/data-configurations';
import { ConfigurationCycleService } from './../../is-services/configuration-cycle.service';
import { Cycle, CycleViewModel } from './../../is-models/cycle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'is-configuration-cycle',
  templateUrl: './configuration-cycle.component.html',
  styleUrls: ['./configuration-cycle.component.css']
})
export class ConfigurationCycleComponent implements OnInit {

  @Input() title = 'Configurations Cycle';
  @Input() configurations: CycleViewModel[] = [];
  dataConfiguration: DataConfiguration[] = [
    new DataConfiguration('Id', 'Id'),
    new DataConfiguration('User', 'UserName'),
    new DataConfiguration('Description', 'Description'),
    new DataConfiguration('Duration', 'Duration'),
    new DataConfiguration('Short Break', 'ShortBreak'),
    new DataConfiguration('Long Break', 'LongBreak'),
    new DataConfiguration('Summary Time', 'SummaryTime'),
    new DataConfiguration('Inserted in', 'InsertedIn', 'DataHora'),
    new DataConfiguration('Updated in', 'UpdatedIn', 'DataHora')];

  constructor(private configurarionCycle: ConfigurationCycleService) {

  }

  ngOnInit() {
    this.listConfigurations();
  }

  listConfigurations() {
    this.configurarionCycle.listConfigurationsCycle()
    .subscribe(configurations => {this.configurations = configurations; console.log(this.configurations);
    });
  }

}
