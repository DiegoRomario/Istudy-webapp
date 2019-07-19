import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'is-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})
export class ButtonCustomComponent implements OnInit {

  @Input() title = 'default';
  @Input() styleCustom = 'dark';
  @Input() iconRight: string;
  @Input() iconLeft: string;
  @Input() disabled: false;

  @Output() originAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  MyClick() {
    this.originAction.emit();
  }

}
