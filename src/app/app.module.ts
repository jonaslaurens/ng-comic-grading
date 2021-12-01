import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { DefectComponent } from './components/defect/defect.component';
import { DefectnavComponent } from './components/defectnav/defectnav.component';
import { DefectsComponent } from './components/defects/defects.component';
import { DefectsPageComponent } from './components/defects-page/defects-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProComponent } from './components/pro/pro.component';
import { ResultComponent } from './components/result/result.component';
import { SelectprocessComponent } from './components/selectprocess/selectprocess.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { AppRoutingModule } from './modules/app-routing.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    DefectComponent,
    DefectnavComponent,
    DefectsComponent,
    DefectsPageComponent,
    NavbarComponent,
    ProComponent,
    ResultComponent,
    SelectprocessComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
