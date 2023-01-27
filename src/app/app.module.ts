import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { Aula3Component } from './components/aula3/aula3.component';
import { Aula4Component } from './components/aula4/aula4.component';
import { Aula5Component } from './components/aula5/aula5.component';
import { Aula6Component } from './components/aula6/aula6.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Aula3Component,
    Aula4Component,
    Aula5Component,
    Aula6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
