import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  login(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'auth/login', obj)
  }

}
