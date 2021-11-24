import { Injectable } from '@angular/core';
import { DefectsService } from './defects.service';

@Injectable({
  providedIn: 'root',
})
export class PageNavigationService {
  page: number = 0;

  constructor(private defectService: DefectsService) {}

  increasePage(): void | number {
    if (this.page === this.defectService.defects.length - 1) return;
    return this.page++;
  }

  decreasePage(): void {
    if (this.page === 0) return;
    this.page--;
  }

  skipToLast(): void {
    this.page = 35;
  }

  setPage(pageNumber: number): void {
    this.page = pageNumber;
  }

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
