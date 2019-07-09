export class DataConfiguration {

  constructor(header: string, field: string, pipe: string = null) {
    this.Header = header;
    this.Field = field;
    this.Pipe = pipe;
  }
    Header: string;
    Field: string;
    Pipe: string;
  }
