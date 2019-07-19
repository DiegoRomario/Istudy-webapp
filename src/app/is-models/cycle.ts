export class Cycle {
    Id: number;
    User: number;
    Description: string;
    Duration: number;
    ShortBreak: number;
    LongBreak: number;
    SummaryTime: number;
    InsertedIn: Date = new Date();
    UpdatedIn: Date = new Date();
  }

export class CycleViewModel {
    Id: number;
    UserName: string;
    Description: string;
    Duration: number;
    ShortBreak: number;
    LongBreak: number;
    SummaryTime: number;
    InsertedIn: Date = new Date();
    UpdatedIn: Date = new Date();
  }
