// import { DataConfiguration } from '../../is-models/data-configurations';
// import { CycleConfigurationService } from '../../is-services/cycle-configuration.service';
// import { CycleConfiguration, CycleConfiguration } from '../../is-models/cycle';
// import { OnInit, Input } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { UserService } from 'src/app/is-services/user.service';
// import { Base } from './models/base';

// export class RegisterBase <T extends Base> implements OnInit {

//   @Input() baseList: T[] = [];
//   @Input() baseModel: T;
//   form: FormGroup;

//   @Input() baseConfiguration: DataConfiguration[] = [];

//   constructor(private configurarionCycle: CycleConfigurationService,
//               private modalService: NgbModal,
//               private formBuilder: FormBuilder,
//               private userService: UserService) {

//     this.CreateForm();

//   }

//   ngOnInit() {
//     this.listConfigurations();
//   }

//   listConfigurations() {
//     this.configurarionCycle.listConfigurationsCycle()
//       .subscribe(configurations => {
//         this.baseList = configurations; console.log(this.baseList);
//       });
//   }
//   listConfigurationsById(Id: number) {
//     if (Id > 0) {
//     this.configurarionCycle.listConfigurationsCycleById(Id)
//       .subscribe(configuration => {
//         this.baseModel = configuration; console.log(this.baseModel); this.CreateForm();
//       });
//     } else {
//       this.baseModel = new CycleConfiguration();
//       this.baseModel.UserName = this.userService.getUserName();
//       this.CreateForm();
//     }
//   }

//   Open(content, Id) {
//     this.listConfigurationsById(Id);
//     this.modalService.open(content, {
//       ariaLabelledBy: 'modal-basic-title',
//       size: 'lg',
//       backdrop: 'static',
//       keyboard: false
//     }).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }

//   Back() {
//     window.history.go(-1);
//   }
//   New() {
//     window.history.go(-1);
//   }
//   Save() {
//     const newConfig = this.form.getRawValue() as CycleConfiguration;
//     newConfig.User = this.userService.getUserId();
//     this.configurarionCycle.save(newConfig).subscribe(() => console.log('Salvo com sucesso!'),
//       err => console.log(err));
//   }


//   CreateForm() {
//     this.form = this.formBuilder.group({
//       Id: [{value: this.baseModel.Id, disabled: true}, Validators.required],
//       UserName: [{ value: this.baseModel.UserName, disabled: true }, Validators.required],
//       Description: [this.baseModel.Description, Validators.required],
//       Duration: [this.baseModel.Duration, Validators.required],
//       ShortBreak: [this.baseModel.ShortBreak],
//       LongBreak: [this.baseModel.LongBreak],
//       SummaryTime: [this.baseModel.SummaryTime],
//       InsertedIn: new FormControl({ value: new Date(this.baseModel.InsertedIn), disabled: true }, { validators: [] }),
//       UpdatedIn: new FormControl({ value: new Date(this.baseModel.UpdatedIn), disabled: true }, { validators: [] }),
//     });
//   }


// }
