import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import ShortUniqueId from 'short-unique-id';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment!: Payment;

  constructor(private https: HttpClient, private service: FlightService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.payment = new Payment();
  }
  successpage() {
    this.router.navigateByUrl('/paymentsuccess')
  }

  createPayment() {
    console.log(this.payment)
    this.service.createPayment(this.payment)
      .subscribe(data => {
        // this.message = data; // read message
        this.payment = new Payment(); // clear form
      }, error => {
        console.log(error);
      });
  }

  public pnrgenerate() {
    const uuid = new ShortUniqueId({ length: 5 })
    this.payment.pnr = uuid()
  }

}