import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookComponent } from './book/book.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatmatrixComponent } from './seatmatrix/seatmatrix.component';
import { AboutComponent } from './about/about.component';
import { CancelComponent } from './cancel/cancel.component';
import { RegistrationComponent } from './registration/registration.component';
import { FoodComponent } from './food/food.component';
import { CheckinComponent } from './checkin/checkin.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'userlogin',component:UserloginComponent,pathMatch:'full'},
  {path:'adminlogin',component:AdminloginComponent,pathMatch:'full'},
  {path:'book', component:BookComponent, pathMatch:'full'},
  {path:'viewdetails', component:ViewDetailsComponent, pathMatch:'full'},
  {path:'payment', component:PaymentComponent, pathMatch:'full'},
  {path:'seat', component:SeatmatrixComponent, pathMatch:'full'},
  {path:'about', component:AboutComponent, pathMatch:'full'},
  {path:'cancel', component:CancelComponent, pathMatch:'full'},
  {path:'registration', component:RegistrationComponent, pathMatch:'full'},
  {path:'food', component:FoodComponent, pathMatch:'full'},
  {path:'checkin', component:CheckinComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
