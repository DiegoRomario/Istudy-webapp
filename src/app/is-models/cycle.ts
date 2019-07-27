export class CycleConfiguration {
    Id: number;
    User: number;
    Description: string;
    Duration: number;
    ShortBreak: number;
    LongBreak: number;
    SummaryTime: number;
    CurrentCycle: boolean;
    InsertedIn: Date = new Date();
    UpdatedIn: Date = new Date();
  }

export class CycleConfigurationViewModel {
    Id: number;
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
