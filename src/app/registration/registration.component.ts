import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Register } from '../register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register!: Register;
  message!: string;

  constructor(private service: FlightService) { }

  ngOnInit(): void {
    this.register = new Register();
  }

  createRegister() {
    if(confirm("Successfully registered!!!")) {
    this.service.createRegister(this.register)
    .subscribe(data => {
      this.register = new Register(); 
    }, error => {
      console.log(error);
    });
  }
}
}
