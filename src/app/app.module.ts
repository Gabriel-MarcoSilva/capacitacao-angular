import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from "primeng/inputtext"
import { ButtonModule } from "primeng/button"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
