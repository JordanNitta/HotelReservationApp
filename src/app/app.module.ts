import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Need to import the modules
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
// HTTP client module so we can make api request
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  // Add the module to the import 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
