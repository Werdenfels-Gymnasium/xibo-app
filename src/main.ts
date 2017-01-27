import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MaterialModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const xiboRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(xiboRoutes),
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class XiboAppModule {}

/* Bootstrap the Angular module. */
platformBrowserDynamic().bootstrapModule(XiboAppModule);