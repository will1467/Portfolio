import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChirperProjectComponent } from './chirper-project/chirper-project.component';
import { EconIndicatorsProjectComponent } from './econ-indicators-project/econ-indicators-project.component';
import { AngularProjectComponent } from './angular-project/angular-project.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'project/Chirper', component: ChirperProjectComponent},
  {path: 'project/EconIndicators', component: EconIndicatorsProjectComponent},
  {path: 'project/Angular', component: AngularProjectComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChirperProjectComponent,
    EconIndicatorsProjectComponent,
    AngularProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
