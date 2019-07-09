import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'is-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})
export class ButtonCustomComponent implements OnInit {

  @Input() Title = 'default';
  @Input() Style = 'dark';
  @Input() IconRight: string;
  @Input() IconLeft: string;

  constructor() { }

  ngOnInit() {
  }

}
