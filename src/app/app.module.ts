import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookComponent } from './book/book.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatmatrixComponent } from './seatmatrix/seatmatrix.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CancelComponent } from './cancel/cancel.component';
import { RegistrationComponent } from './registration/registration.component';
import { FoodComponent } from './food/food.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { AllFlightComponent } from './all-flight/all-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserloginComponent,
    AdminloginComponent,
    BookComponent,
    PaymentComponent,
    SeatmatrixComponent,
    AboutComponent,
    FooterComponent,
    CancelComponent,
    RegistrationComponent,
    FoodComponent,
    CheckinComponent,
    ContactUsComponent,
    AddFlightComponent,
    ViewFlightComponent,
    EditFlightComponent,
    AllFlightComponent
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
