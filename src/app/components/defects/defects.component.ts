import { Component, Input, OnInit } from '@angular/core';
import { Defect } from 'src/app/interfaces/Defect';

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.scss'],
})
export class DefectsComponent implements OnInit {
  @Input() defects: any = [];

  constructor() {}

  ngOnInit(): void {}
}
