import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private defectService: DefectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate([0], { relativeTo: this.route });
  }
}
