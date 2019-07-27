import { DataConfiguration } from '../../is-models/data-configurations';
import { CycleConfigurationService } from '../../is-services/cycle-configuration.service';
import { CycleConfiguration, CycleConfigurationViewModel } from '../../is-models/cycle';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/is-services/user.service';

@Component({
  selector: 'is-cycle-configuration',
  templateUrl: './cycle-configuration.component.html',
  styleUrls: ['./cycle-configuration.component.css']
})
export class CycleConfigurationComponent implements OnInit {

  closeResult: string;

  @Input() title = 'Configurations Cycle';
  @Input() configurations: CycleConfigurationViewModel[] = [];
  @Input() model: CycleConfigurationViewModel = new CycleConfigurationViewModel();
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

  constructor(private configurarionCycle: CycleConfigurationService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private userService: UserService) {

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
    if (Id > 0) {
    this.configurarionCycle.listConfigurationsCycleById(Id)
      .subscribe(configuration => {
        this.model = configuration; console.log(this.model); this.CreateForm();
      });
    } else {
      this.model = new CycleConfigurationViewModel();
      this.model.UserName = this.userService.getUserName();
      this.CreateForm();
    }
  }

  Open(content, Id) {
    this.listConfigurationsById(Id);
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    }).result.then((result) => {
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
    const newConfig = this.form.getRawValue() as CycleConfiguration;
    newConfig.User = this.userService.getUserId();
    this.configurarionCycle.save(newConfig).subscribe(() => console.log('Salvo com sucesso!'),
      err => console.log(err));
  }


  CreateForm() {
    this.form = this.formBuilder.group({
      Id: [{value: this.model.Id, disabled: true}, Validators.required],
      UserName: [{ value: this.model.UserName, disabled: true }, Validators.required],
      Description: [this.model.Description, Validators.required],
      Duration: [this.model.Duration, Validators.required],
      ShortBreak: [this.model.ShortBreak],
      LongBreak: [this.model.LongBreak],
      SummaryTime: [this.model.SummaryTime],
      InsertedIn: new FormControl({ value: new Date(this.model.InsertedIn), disabled: true }, { validators: [] }),
      UpdatedIn: new FormControl({ value: new Date(this.model.UpdatedIn), disabled: true }, { validators: [] }),
    });
  }


}
