import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Teste01Component } from './teste01/teste01.component';
import { Teste02Component } from './teste02/teste02.component';
import { Teste03Component } from './teste03/teste03.component';
import { Teste04Component } from './teste04/teste04.component';

@NgModule({
  declarations: [
    AppComponent,
    Teste01Component,
    Teste02Component,
    Teste03Component,
    Teste04Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
