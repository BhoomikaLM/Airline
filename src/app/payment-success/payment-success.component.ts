import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  title = 'EmailTemplate';
  emailNotification: PaymentSuccess = { email: '' };
  constructor(private https: HttpClient) { }

  ngOnInit(): void {

  }
  onSubmit() {
    this.https.post<PaymentSuccess>('http://localhost:8095/sendEmail/getdetails', this.emailNotification).subscribe(
      res => {
        this.emailNotification = res;
        console.log(this.emailNotification);
        alert('Email Sent successfully');
        this.emailNotification.email = '';
      });
  }
}
interface PaymentSuccess {
  email: string;
}
