import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-configuration-cycle',
  templateUrl: './configuration-cycle.component.html',
  styleUrls: ['./configuration-cycle.component.css']
})
export class ConfigurationCycleComponent implements OnInit {

  @Input() title = 'Configurations Cycle';

  constructor() { }

  ngOnInit() {
  }

}
