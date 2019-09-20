import { User } from './user';
import { BaseModel } from '../core/base/models/base-model';

export class CycleConfiguration extends BaseModel {
  constructor() {
    super();
    this.User = new User();
  }
  UserId: number;
  Description: string;
  Duration: number;
  ShortBreak: number;
  LongBreak: number;
  SummaryTime: number;
  CurrentCycle: boolean = false;
  InsertedIn: Date = new Date();
  UpdatedIn: Date = new Date();
  User: User;

  static fromModel(Data: any): CycleConfiguration {
    return Object.assign(new CycleConfiguration(), Data);
  }

  public teste() {
    alert('teste');
  }

}
export class CycleConfigurationViewModel extends BaseModel {
  UserId: number;
  UserName: string;
  Description: string;
  Duration: number;
  ShortBreak: number;
  LongBreak: number;
  SummaryTime: number;
  CurrentCycle: boolean;
  InsertedIn: Date = new Date();
  UpdatedIn: Date = new Date();
}


