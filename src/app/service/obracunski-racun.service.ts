import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { StanjeRacuna } from '../model/stanje-racuna';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ObracunskiRacunService extends BaseService {
  constructor(http: HttpClient) {
    super(`${environment.apiUrl}/obracunski-racuni`, http);
  }

  getStanjaRacuna(date: Date): Observable<StanjeRacuna[]> {
    let params: any = {
      datum: date,
    };

    return this.http
      .get(`${this.url}/stanja`, { params, observe: 'response' })
      .pipe(map((response) => response.body))
      .pipe(catchError(this.handleError))
      .pipe(
        map((responseBody) => {
          console.log(responseBody);
          return responseBody as StanjeRacuna[];
        })
      );
  }
}
