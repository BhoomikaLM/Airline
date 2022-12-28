import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {
  flight!: Flight[];
  message!: string;
  plane!: Flight;

  constructor(private service: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFlight();
  }

  getAllFlight() {
    return this.service.getAllFlight()
    .subscribe(
      data => {
        this.flight = data;
      }, error => {
        console.log(error);
      }
    );
  }

  bookThisFlight(flight_id: number) {
    this.router.navigate(['book', flight_id]);
  }

  bookFlight() {
    this.service.bookFlight(this.plane)
    .subscribe(data => {
      this.message = data; // read message
      this.plane = new Flight(); // clear form
    }, error => {
      console.log(error);
    });
  }
}
