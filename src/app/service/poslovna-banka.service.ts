import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PoslovnaBanka } from '../model/poslovna-banka';
import { BaseService } from './base.service';
import { Klijent } from './../model/klijent';
import { catchError } from 'rxjs/operators';
import { TekuciRacun } from './../model/tekuci-racun';

@Injectable({
  providedIn: 'root',
})
export class PoslovnaBankaService extends BaseService {
  constructor(http: HttpClient) {
    super(`${environment.apiUrl}/poslovne-banke`, http);
  }

  getPoslovnaBanka(sifraBanke: number): Observable<PoslovnaBanka> {
    return this.getOne(sifraBanke).pipe(
      map((responseBody) => responseBody as PoslovnaBanka)
    );
  }

  getPoslovnaBankaKlijenti(sifraBanke: number): Observable<Klijent[]> {
    return this.http
      .get(`${this.url}/${sifraBanke}/klijenti`, { observe: 'response' })
      .pipe(map((response) => response.body))
      .pipe(catchError(this.handleError))
      .pipe(
        map((responseBody) => {
          return responseBody as Klijent[];
        })
      );
  }

  getPoslovnaBankaRacuni(sifraBanke: number): Observable<TekuciRacun[]> {
    return this.http
      .get(`${this.url}/${sifraBanke}/tekuciRacuni`, { observe: 'response' })
      .pipe(map((response) => response.body))
      .pipe(catchError(this.handleError))
      .pipe(
        map((responseBody) => {
          return responseBody as TekuciRacun[];
        })
      );
  }

  getPoslovneBanke(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/poslovne-banke`, { observe: 'response' })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }

  createPoslovnaBanka(poslovnaBanka: PoslovnaBanka): Observable<number> {
    let body = { ...poslovnaBanka };
    return this.create(body);
  }
}
