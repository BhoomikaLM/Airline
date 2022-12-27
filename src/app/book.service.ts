import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
    providedIn: 'root'
  })

export class BookService {

    private basePathBook = 'http://localhost:8095/rest/bookticket';

    constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<any> {
    return this.http.post(`${this.basePathBook}/save`, book, {responseType: 'text'});
  }

  deleteOneBook(email: String): Observable<string> {
    return this.http.delete(`${this.basePathBook}/remove/${email}`, {responseType: 'text'});
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.basePathBook}/all`);
  }  
  
  getOneBook(email: string): Observable<Book> {
    return this.http.get<Book>(`${this.basePathBook}/one/${email}`);
  }
}