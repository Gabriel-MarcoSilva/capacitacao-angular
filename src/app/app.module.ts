import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ButtonModule } from "primeng/button";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from "primeng/inputtext"
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { HeaderComponent } from './comonenets/header/header.component';
import { FooterComponent } from './comonenets/footer/footer.component';
import { AboutComponent } from './comonenets/pages/about/about.component';
import { HomeComponent } from './comonenets/pages/home/home.component';
import { NewMomentsComponent } from './comonenets/pages/new-moments/new-moments.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentsComponent,
    MomentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
