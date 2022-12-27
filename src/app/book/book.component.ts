import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book!: Book;
  message!: string;

  // inject service class
  constructor(private service: BookService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.book = new Book();
  }

  // tslint:disable-next-line: typedef
  createBook() {
    this.service.createBook(this.book)
    .subscribe(data => {
      this.message = data; // read message
      this.book = new Book(); // clear form
    }, error => {
      console.log(error);
    });
  }
}
