import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BookComponent } from './book/book.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatmatrixComponent } from './seatmatrix/seatmatrix.component';
import { AboutComponent } from './about/about.component';
import { CancelComponent } from './cancel/cancel.component';
import { RegistrationComponent } from './registration/registration.component';
import { FoodComponent } from './food/food.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AllFlightComponent } from './all-flight/all-flight.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { ViewBookdetailsComponent } from './view-bookdetails/view-bookdetails.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'userlogin',component:UserloginComponent,pathMatch:'full'},
  {path:'book', component:BookComponent, pathMatch:'full'},
  {path:'book/:flight_id', component:BookComponent},
  {path:'payment', component:PaymentComponent, pathMatch:'full'},
  {path:'seat', component:SeatmatrixComponent, pathMatch:'full'},
  {path:'about', component:AboutComponent, pathMatch:'full'},
  {path:'cancel', component:CancelComponent, pathMatch:'full'},
  {path:'registration', component:RegistrationComponent, pathMatch:'full'},
  {path:'food', component:FoodComponent, pathMatch:'full'},
  {path:'checkin', component:CheckinComponent, pathMatch:'full'},
  {path:'contactus', component:ContactUsComponent, pathMatch:'full'},
  {path:'viewflight', component:ViewFlightComponent, pathMatch:'full'},
  {path:'addflight', component:AddFlightComponent, pathMatch:'full'},
  {path:'flightedit/:flight_id', component:EditFlightComponent, pathMatch:'full'},
  {path:'allflight', component:AllFlightComponent, pathMatch:'full'},
  {path:'viewbookdetails', component:ViewBookdetailsComponent,pathMatch:'full'},
  {path:'details/:email/:flight_id', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
