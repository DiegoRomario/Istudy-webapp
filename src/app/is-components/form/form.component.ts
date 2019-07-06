import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'is-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
