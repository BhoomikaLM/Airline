import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { Book } from './book';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})

export class FlightService {

  private basePathFlight = 'http://localhost:8095/rest/flight';
  private basePathBookFlight = 'http://localhost:8095/rest/flight/book';
  private basePathBook = 'http://localhost:8095/rest/bookticket';
  private basePathRegister = 'http://localhost:8095/rest/register';


  constructor(private http: HttpClient) { }

  createRegister(register: Register): Observable<any> {
    return this.http.post(`${this.basePathRegister}/save`, register, { responseType: 'text' });
  }

  getAllFlight(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.basePathFlight}/all`);
  }

  deleteOneFlight(flight_id: number): Observable<any> {
    return this.http.delete(`${this.basePathFlight}/remove/${flight_id}`, { responseType: 'text' });
  }

  createFlight(flight: Flight): Observable<any> {
    return this.http.post(`${this.basePathFlight}/save`, flight, { responseType: 'text' });
  }

  getOneFlight(flight_id: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.basePathFlight}/one/${flight_id}`);
  }

  updateFlight(flight_id: number, flight: Flight): Observable<any> {
    return this.http.put(`${this.basePathFlight}/modify/${flight_id}`, flight, { responseType: 'text' });
  }

  bookFlight(flight: Flight): Observable<any> {
    return this.http.post(`${this.basePathBookFlight}/save`, flight, { responseType: 'text' });
  }

  createBook(book: Book): Observable<any> {
    return this.http.post(`${this.basePathBook}/save`, book, { responseType: 'text' });
  }

  deleteOneBook(email?: String): Observable<Object> {
    return this.http.delete(`${this.basePathBook}/remove/${email}`, { responseType: 'text' });
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.basePathBook}/all`);
  }

  getOneBook(email: string): Observable<Book> {
    return this.http.get<Book>(`${this.basePathBook}/one/${email}`);
  }
}