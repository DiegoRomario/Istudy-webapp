import { DataConfiguration } from './../../is-models/data-configurations';
import { ConfigurationCycleService } from './../../is-services/configuration-cycle.service';
import { Cycle, CycleViewModel } from './../../is-models/cycle';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'is-configuration-cycle',
  templateUrl: './configuration-cycle.component.html',
  styleUrls: ['./configuration-cycle.component.css']
})
export class ConfigurationCycleComponent implements OnInit {

  closeResult: string;

  @Input() title = 'Configurations Cycle';
  @Input() configurations: CycleViewModel[] = [];
  dataConfiguration: DataConfiguration[] = [
    new DataConfiguration('Id', 'Id'),
    new DataConfiguration('User', 'UserName'),
    new DataConfiguration('Description', 'Description'),
    new DataConfiguration('Duration', 'Duration'),
    new DataConfiguration('Short Break', 'ShortBreak'),
    new DataConfiguration('Long Break', 'LongBreak'),
    new DataConfiguration('Summary Time', 'SummaryTime'),
    new DataConfiguration('Inserted in', 'InsertedIn', 'DataHora'),
    new DataConfiguration('Updated in', 'UpdatedIn', 'DataHora')];

  constructor(private configurarionCycle: ConfigurationCycleService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.listConfigurations();
  }

  listConfigurations() {
    this.configurarionCycle.listConfigurationsCycle()
    .subscribe(configurations => {this.configurations = configurations; console.log(this.configurations);
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  Back() {
    window.history.go(-1);
  }
  New() {
    window.history.go(-1);
  }
  Save() {
    alert('Save');
  }

}
