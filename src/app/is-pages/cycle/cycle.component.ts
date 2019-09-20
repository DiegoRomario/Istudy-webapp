import { CycleConfiguration } from './../../is-models/cycle';
import { CurrentCycleConfigurationService } from './../../is-services/current-cycle-configuration.service';

import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'is-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css'],
})
export class CycleComponent implements OnInit {

  currentConfiguration = new CycleConfiguration();
  constructor(private currentCycleConfiguration: CurrentCycleConfigurationService,
              private activatedRoute: ActivatedRoute,
              ) {  }



  ngOnInit(): void {
    this.listConfigurations();
  }


  listConfigurations() {
    this.currentConfiguration =  this.activatedRoute.snapshot.data.currentConfiguration;
    // this.currentCycleConfiguration.listConfigurationsCycle()
    //   .subscribe(configurations => {
    //     this.cycleConfiguration = configurations;
    //   });
  }
}
