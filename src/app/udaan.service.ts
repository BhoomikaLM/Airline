import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})

export class UdaanService {
    private basePathRegister = 'http://localhost:8090/rest/register';

    constructor(private http: HttpClient) { }

    createRegister(register: Register): Observable<any> {
        return this.http.post(`${this.basePathRegister}/save`, register, {responseType: 'text'});
      }
}
