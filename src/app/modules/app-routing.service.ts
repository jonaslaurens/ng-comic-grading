import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectsPageComponent } from '../components/defects-page/defects-page.component';
import { ProComponent } from '../components/pro/pro.component';
import { SelectprocessComponent } from '../components/selectprocess/selectprocess.component';

const appRoutes: Routes = [
  { path: '', component: SelectprocessComponent, pathMatch: 'full' },
  {
    path: 'new',
    component: DefectsPageComponent,
    children: [{ path: ':id', component: DefectsPageComponent }],
  },
  {
    path: 'pro',
    component: ProComponent,
    children: [{ path: ':id', component: DefectsPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
