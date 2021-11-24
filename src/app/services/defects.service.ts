import { Injectable } from '@angular/core';
import { Category } from '../interfaces/Category';
import { defects } from '../mock-defects';
import { PageNavigationService } from './page-navigation.service';

@Injectable({
  providedIn: 'root',
})
export class DefectsService {
  defects: Category[] = defects;

  constructor() {}

  checkDefect() {
    // check a single defect inside the defects array
  }

  getDefects(): Category[] {
    return this.defects.slice();
  }
}
