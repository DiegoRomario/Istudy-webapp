import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'is-configuration-cycle',
  templateUrl: './configuration-cycle.component.html',
  styleUrls: ['./configuration-cycle.component.css']
})
export class ConfigurationCycleComponent implements OnInit {

  @Input() title = 'Configurations Cycle';

  constructor() { }

  ngOnInit() {
  }

}
