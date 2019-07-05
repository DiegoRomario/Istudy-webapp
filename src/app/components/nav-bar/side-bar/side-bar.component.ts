import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'is-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  classe: string = '';
  icone: string = 'minus';

  constructor() { }

  ngOnInit() {
  }

  addClass () {
    if (this.classe === '') {
      this.classe = 'toggled';
      this.icone = 'plus';
    } else {
      this.classe = '';
      this.icone = 'minus';
    }
  }

}
