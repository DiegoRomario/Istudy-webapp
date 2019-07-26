import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  @Input() seconds = 30;
  @Input() title = 'Countdown';
  constructor() { }

  notify: string;
  config: any;

  @ViewChild('countdown') counter: CountdownComponent;

  ngOnInit(): void {
    this.config = { leftTime: this.seconds, demand: true };
  }

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
    this.counter.config.leftTime = this.seconds;
    this.counter.config.demand = false;
    this.counter.restart();
    this.counter.resume();
    this.counter.pause();
  }
}
