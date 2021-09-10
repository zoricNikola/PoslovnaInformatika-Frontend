import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {TekuciRacun} from "../model/tekuci-racun";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TekuciRacunService extends BaseService{

  constructor(http: HttpClient) {
    super(`${environment.apiUrl}/tekuci-racuni`,http);
  }

  getAllTekuciRacun(): Observable<TekuciRacun []>{
    return this.getAll();
  }

  createTekuciRacun(resource: any): Observable<number> {
    return this.http
      .post(this.url, JSON.stringify(resource), {
        observe: 'response',
        headers: this.contentTypeJsonHeaders,
      })
      .pipe(map((response) => response.body as number))
      .pipe(catchError(this.handleError));
  }

  deleteTekuciRacun(id: number): Observable<void>{
    return this.delete(id);
  }
}
