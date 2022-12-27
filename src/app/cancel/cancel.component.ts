import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  book!: Book;
  message!: string;
  email!:string;

  constructor(private service: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.email = this.activatedRoute.snapshot.params['email'];
    // make service call to get student object
    this.service.getOneBook(this.email).subscribe(
      data => {
      this.book = data;
      console.log(this.email);
    }, error => {
      console.log(error);
    });
  }

  deleteBook(email: string) {
    if (confirm('Do you want to delete?')) {
      this.service.deleteOneBook(email).subscribe(data => {
        this.message = data;
        // this.getOneBook();
      }, error => {
        console.log(error);
      });
    } else {
      this.message = '';
    }
  }
  
}
