import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
