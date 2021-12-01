import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { DefectsService } from 'src/app/services/defects.service';
import { PageNavigationService } from 'src/app/services/page-navigation.service';

@Component({
  selector: 'app-defects-page',
  templateUrl: './defects-page.component.html',
  styleUrls: ['./defects-page.component.scss'],
  providers: [DefectsService],
})
export class DefectsPageComponent implements OnInit {
  defects: Category[] = [];
  currentPage: number = 0;

  constructor(
    private defectsService: DefectsService,
    private pageNav: PageNavigationService
  ) {}

  ngOnInit(): void {
    this.defects = this.defectsService.getDefects();
    this.currentPage = this.pageNav.getCurrentPage();
  }
}
