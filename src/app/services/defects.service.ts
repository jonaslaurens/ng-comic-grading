import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../interfaces/Category';
import { Defect } from '../interfaces/Defect';
import { defects } from '../mock-defects';
import { PageNavigationService } from './page-navigation.service';

@Injectable({
  providedIn: 'root',
})
export class DefectsService {
  defects: Category[] = defects;
  currentPage: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  checkDefect() {
    // check a single defect inside the defects array
  }

  getDefects(id: number): Category {
    return this.defects[id];
  }

  getCurrentPage() {
    return this.currentPage;
  }

  setCurrentPage(pageNum: number) {
    this.currentPage = pageNum;
  }

  nextPage() {
    if (this.currentPage === this.defects.length - 1) return;
    this.currentPage++;
    this.router.navigate([this.currentPage], { relativeTo: this.route });
  }

  previousPage() {
    if (this.currentPage === 0) return;
    this.currentPage--;
    this.router.navigate([this.currentPage], { relativeTo: this.route });
  }
}
