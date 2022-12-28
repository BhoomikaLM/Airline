import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book!: Book;
  message!: string;

  constructor(private service: FlightService, private goroute: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.book = new Book();
    this.book.flight_id = this.activatedroute.snapshot.params['flight_id'];
  }

  createBook() {
    this.service.createBook(this.book)
    .subscribe(data => {
      this.message = data; // read message
      this.gotodetails(this.book.email, this.book.flight_id)
      this.book = new Book(); // clear form

    }, error => {
      console.log(error);
    });
  }

  gotodetails(email: string, flight_id: number) {
    this.goroute.navigate(['details', email, flight_id]);
  }
}
