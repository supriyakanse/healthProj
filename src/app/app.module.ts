import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomePgComponent } from './welcome-pg/welcome-pg.component';
import { PlaceAppointmentPgComponent } from './place-appointment-pg/place-appointment-pg.component';
import { ViewAppointmentPgComponent } from './view-appointment-pg/view-appointment-pg.component';
import { QueryPgComponent } from './query-pg/query-pg.component';
import { HeaderPgComponent } from './header-pg/header-pg.component';
import { FooterPgComponent } from './footer-pg/footer-pg.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePgComponent,
    PlaceAppointmentPgComponent,
  
    ViewAppointmentPgComponent,
    QueryPgComponent,
    HeaderPgComponent,
    FooterPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
