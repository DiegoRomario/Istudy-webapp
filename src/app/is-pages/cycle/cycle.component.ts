import { CountDownConfig } from './../../is-models/count-down-config';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'is-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CycleComponent {

  constructor() {}

  notify: string;
  config: any = { leftTime: 30, demand: true};

  public testConfigs: CountDownConfig = { timeLeft: 30 };

  stopConfig: any = { stopTime: new Date().getTime() + 1000 * 30 };

  @ViewChild('countdown') counter: CountdownComponent;

  onEvent(value: any) {
    console.log('event', value);
  }

  Start() {
    this.counter.resume();
  }
  Pause() {
    this.counter.pause();
  }

  public Restart() {
    this.counter.restart();
    this.counter.resume();
  }

  public Reset() {
    this.counter.config.leftTime = 30;
    this.counter.config.demand = false;
    this.counter.restart();
    this.counter.resume();
    this.counter.pause();
  }
}
