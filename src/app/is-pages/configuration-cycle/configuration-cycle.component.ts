import { DataConfiguration } from './../../is-models/data-configurations';
import { ConfigurationCycleService } from './../../is-services/configuration-cycle.service';
import { Cycle, CycleViewModel } from './../../is-models/cycle';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'is-configuration-cycle',
  templateUrl: './configuration-cycle.component.html',
  styleUrls: ['./configuration-cycle.component.css']
})
export class ConfigurationCycleComponent implements OnInit {

  closeResult: string;

  @Input() title = 'Configurations Cycle';
  @Input() configurations: CycleViewModel[] = [];
  @Input() model: CycleViewModel = new CycleViewModel();
  form: FormGroup;

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

  constructor(private configurarionCycle: ConfigurationCycleService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {

    this.CreateForm();

  }

  ngOnInit() {
    this.listConfigurations();
  }

  listConfigurations() {
    this.configurarionCycle.listConfigurationsCycle()
      .subscribe(configurations => {
      this.configurations = configurations; console.log(this.configurations);
      });
  }
  listConfigurationsById(Id: number) {
    this.configurarionCycle.listConfigurationsCycleById(Id)
      .subscribe(configuration => {
      this.model = configuration; console.log(this.model); this.CreateForm();
      });
  }

  Open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  Edit(content, Id) {
    this.listConfigurationsById(Id);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
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
      return `with: ${reason}`;
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


  CreateForm() {
    this.form = this.formBuilder.group({
      Id: [this.model.Id, Validators.required],
      UserName: [this.model.UserName, Validators.required],
      Description: [this.model.Description, Validators.required],
      Duration: [this.model.Duration, Validators.required],
      ShortBreak: [this.model.ShortBreak],
      LongBreak: [this.model.LongBreak],
      SummaryTime: [this.model.SummaryTime],
      InsertedIn: [this.model.InsertedIn],
      UpdatedIn: [this.model.UpdatedIn]
    });
  }


}
