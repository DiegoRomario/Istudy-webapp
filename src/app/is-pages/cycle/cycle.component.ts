import { CycleLog, ActionCycle } from './../../is-models/cycle-log';
import { CycleLogService } from './../../is-services/cycle-log.service';
import { CycleConfiguration } from './../../is-models/cycle';

import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'is-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css'],
})
export class CycleComponent implements OnInit {

  currentConfiguration = new CycleConfiguration();
  cycleLog = new CycleLog();


  constructor(private activatedRoute: ActivatedRoute,
              private cycleLogService: CycleLogService
              ) {  }

  log(paction: ActionCycle) {
    this.cycleLog = Object.assign(new CycleLog(),
                                  this.currentConfiguration,
                                  {CycleId : this.currentConfiguration.Id,
                                  Id: 0,
                                  Action: paction,
                                  DateLog: new Date()});


    this.cycleLogService.save(this.cycleLog).subscribe( x => { console.log(x); });

    alert ('demo');
  }

  ngOnInit(): void {
    this.listConfigurations();
  }


  listConfigurations() {
    this.currentConfiguration =  this.activatedRoute.snapshot.data.currentConfiguration;
  }



}
