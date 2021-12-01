import { Component, OnInit } from '@angular/core';
import { DefectsService } from 'src/app/services/defects.service';
import { PageNavigationService } from 'src/app/services/page-navigation.service';

@Component({
  selector: 'app-defectnav',
  templateUrl: './defectnav.component.html',
  styleUrls: ['./defectnav.component.scss'],
})
export class DefectnavComponent implements OnInit {
  constructor(private pageNavService: PageNavigationService) {}

  ngOnInit(): void {}

  handleNavigationClick(navlink: string): void {
    if (navlink === 'next') {
      return this.pageNavService.nextPage();
    }

    if (navlink === 'prev') {
      return this.pageNavService.previousPage();
    }
  }
}
