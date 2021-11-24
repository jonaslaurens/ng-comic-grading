import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { DefectsService } from 'src/app/services/defects.service';

@Component({
  selector: 'app-defects-page',
  templateUrl: './defects-page.component.html',
  styleUrls: ['./defects-page.component.scss'],
  providers: [DefectsService],
})
export class DefectsPageComponent implements OnInit {
  defects: Category[] = [];
  currentPage: number = 0;

  constructor(private dfService: DefectsService) {}

  ngOnInit(): void {
    this.defects = this.dfService.getDefects();
  }
}
