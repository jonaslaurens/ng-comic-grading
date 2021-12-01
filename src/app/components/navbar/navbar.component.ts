import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onNavigationClick(nav: string) {
    if (nav === 'home') {
      this.router.navigate([nav]);
    }

    this.router.navigate([nav], {
      relativeTo: this.route,
    });
  }
}
