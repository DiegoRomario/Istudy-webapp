import { CycleConfiguration } from './cycle';
import { User } from './user';
import { BaseModel } from '../core/base/models/base-model';

export class CycleLog extends BaseModel {
    UserId: number;
    CycleId: number;
    Note: string;
    Action: ActionCycle;
    DateLog: Date;
    User: User;
    Cycle: CycleConfiguration;

    static fromModel(Data: any): CycleLog {
        return Object.assign(new CycleLog(), Data);
    }
}

export class CycleLogViewModel extends BaseModel {
    Id: number;
    UserName: string;
    UserId: number;
    CycleDescription: string;
    CycleId: number;
    Note: string;
    Action: ActionCycle;
    DateLog: Date;
}

export enum ActionCycle {
    Start = 1,
    Pause = 2,
    Restart = 3,
    Reset = 4
}
