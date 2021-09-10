import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PoslovnaBanka } from '../model/poslovna-banka';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PoslovnaBankaService extends BaseService {

  constructor(http: HttpClient) { 
    super(`${environment.apiUrl}/poslovne-banke`, http);
  }

  getPoslovneBanke(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/poslovne-banke`, { observe: 'response' })
    .pipe(map((response) => {return response.body;}))
  }

  createPoslovnaBanka(poslovnaBanka: PoslovnaBanka): Observable<number> {
    let body = {...poslovnaBanka};
    return this.create(body);
  }
}
