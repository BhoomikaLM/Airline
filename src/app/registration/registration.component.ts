import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { UdaanService } from '../udaan.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register!: Register;
  message!: string;

  constructor(private service: UdaanService) { }

  ngOnInit(): void {
    this.register = new Register();
  }

  createRegister() {
    this.service.createRegister(this.register)
    .subscribe(data => {
      this.message = data; // read message
      this.register = new Register(); // clear form
    }, error => {
      console.log(error);
    });
  }
}
