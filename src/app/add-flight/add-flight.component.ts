import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flight!: Flight;
  message!: string;

  // inject service class
  constructor(private service: FlightService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.flight = new Flight();
  }

  createFlight() {
    if (confirm('Flight added successfully!!!?')) {
    this.service.createFlight(this.flight)
    .subscribe(data => {
      this.flight = new Flight();
    }
  , error => {
      console.log(error);
    });
  }
  }
}
