import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
    providedIn: 'root'
  })

export class FlightService {

    private basePathFlight = 'http://localhost:8095/rest/flight';
    private basePathBookFlight = 'http://localhost:8095/rest/flight/book';

    constructor(private http: HttpClient) { }


  getAllFlight(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.basePathFlight}/all`);
  }

  deleteOneFlight(flight_id: number): Observable<any> {
    return this.http.delete(`${this.basePathFlight}/remove/${flight_id}`, {responseType: 'text'});
  }

  createFlight(flight: Flight): Observable<any> {
    return this.http.post(`${this.basePathFlight}/save`, flight, {responseType: 'text'});
  }
  
  getOneFlight(flight_id: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.basePathFlight}/one/${flight_id}`);
  }

  updateFlight(flight_id: number, flight: Flight): Observable<any> {
    return this.http.put(`${this.basePathFlight}/modify/${flight_id}`, flight, {responseType : 'text'});
  }

  bookFlight(flight: Flight): Observable<any> {
    return this.http.post(`${this.basePathBookFlight}/save`, flight, {responseType: 'text'});
  }
}