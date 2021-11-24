import { Injectable } from '@angular/core';

@Injectable()
export class ProcessService {
  process: string = 'Home';

  constructor() {}

  setProcess(chosenProcess: string) {
    this.process = chosenProcess;
  }
}
