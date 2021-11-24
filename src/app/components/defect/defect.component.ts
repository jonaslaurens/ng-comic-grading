import { Component, Input, OnInit } from '@angular/core';
import { Defect } from 'src/app/interfaces/Defect';

@Component({
  selector: 'app-defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.scss'],
})
export class DefectComponent implements OnInit {
  @Input() defect: any;

  constructor() {}

  ngOnInit(): void {}
}
