import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatFormFieldModule } from "@angular/material/form-field"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlossarioComponent } from './components/glossario/glossario.component';
import { ListaGlossarioComponent } from './components/lista-glossario/lista-glossario.component';
import { InfoGlossarioComponent } from './components/info-glossario/info-glossario.component';

@NgModule({
  declarations: [
    AppComponent,
    GlossarioComponent,
    ListaGlossarioComponent,
    InfoGlossarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
