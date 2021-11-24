import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-selectprocess',
  templateUrl: './selectprocess.component.html',
  styleUrls: ['./selectprocess.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProcessService],
})
export class SelectprocessComponent implements OnInit {
  constructor(private processService: ProcessService) {}

  ngOnInit(): void {}

  onSelectProcess(processType: string) {
    this.processService.setProcess(processType);
  }
}
