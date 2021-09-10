import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoslovnaBankaService {

  constructor(private http: HttpClient) { }

  getPoslovneBanke(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/poslovne-banke`, { observe: 'response' })
    .pipe(map((response) => {return response.body;}))
  }
}
