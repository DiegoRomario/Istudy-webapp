import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'is-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})
export class ButtonCustomComponent implements OnInit {

  @Input() Title = 'default';
  @Input() StyleCustom = 'dark';
  @Input() IconRight: string;
  @Input() IconLeft: string;

  @Output() OriginAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  MyClick() {
    this.OriginAction.emit();
  }

}
