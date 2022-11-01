import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlexandreComponent } from './portfolio/alexandre/alexandre.component';

@NgModule({
  declarations: [
    AppComponent,
    AlexandreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
