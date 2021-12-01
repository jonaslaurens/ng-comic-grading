import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefectsService } from './defects.service';

@Injectable({
  providedIn: 'root',
})
export class PageNavigationService {
  page: number = 0;

  constructor(
    private defectService: DefectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  nextPage(): void {
    console.log('next works');

    // if (this.page === this.defectService.defects.length - 1) return;
    // this.page++;
  }

  previousPage(): void {
    console.log('previous works');
    // if (this.page === 0) return;
    // this.page--;
  }

  skipToLast(): void {
    this.page = 35;
  }

  setPage(pageNumber: number): void {
    this.page = pageNumber;
  }

  restartProcess(): void {}

  // restartProcess: () =>
  //   set((state) => {
  //     // reset all checked items so that we start fresh
  //     const prevDefects = state.comicDefects.map((category) => ({
  //       ...category,
  //       defects: category.defects.map((defect) => ({
  //         ...defect,
  //         checked: false,
  //       })),
  //     }));
}
