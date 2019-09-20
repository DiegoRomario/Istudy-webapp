import { CycleConfiguration } from './cycle';
import { User } from './user';
export class CycleLog {
    Id: number;
    UserId: number;
    CycleId: number;
    Note: string;
    Action: ActionCycle;
    DateLog: Date;
    User: User;
    Cycle: CycleConfiguration;
}

export class CycleLogViewModel {
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
