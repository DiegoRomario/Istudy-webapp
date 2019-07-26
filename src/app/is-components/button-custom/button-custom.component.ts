import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'is-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})
export class ButtonCustomComponent implements OnInit {

  @Input() title = 'default';
  @Input() styleButton = 'dark';
  @Input() iconRight: string;
  @Input() iconLeft: string;
  @Input() disabled: false;
  @Input() width: number;
  @Input() height: number;
  @Input() customStyle: any;
  @Input() lineBreakIconRight = false;
  @Output() originAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.customStyle = {
      height: this.height + 'px',
      width: this.width + 'px'
    };
  }

  MyClick() {
    this.originAction.emit();
  }

}
