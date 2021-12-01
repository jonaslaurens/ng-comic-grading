import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefectsService } from 'src/app/services/defects.service';
import { PageNavigationService } from 'src/app/services/page-navigation.service';

@Component({
  selector: 'app-defectnav',
  templateUrl: './defectnav.component.html',
  styleUrls: ['./defectnav.component.scss'],
})
export class DefectnavComponent implements OnInit {
  currentPage: number = 0;

  constructor(
    private defectsService: DefectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentPage = this.defectsService.getCurrentPage();
  }

  handleNavigationClick(navlink: string): void {
    if (navlink === 'next') {
      return this.defectsService.nextPage();
    }

    if (navlink === 'prev') {
      return this.defectsService.previousPage();
    }
  }
}
