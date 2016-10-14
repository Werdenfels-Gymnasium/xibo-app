import 'core-js/es6';
import 'core-js/es7';
import 'zone.js';

import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'xibo-app',
  template: '<span>Test</span>'
})
export class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);



