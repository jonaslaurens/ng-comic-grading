import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { Defect } from 'src/app/interfaces/Defect';
import { DefectsService } from 'src/app/services/defects.service';

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.scss'],
})
export class DefectsComponent implements OnInit {
  defects: Defect[] | undefined;
  id: number = 0;

  constructor(
    private defectService: DefectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.defectService.setCurrentPage(this.id);
      this.defects = this.defectService.getDefects(this.id).defects;
    });
  }
}
