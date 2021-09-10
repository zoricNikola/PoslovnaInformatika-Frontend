import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {BaseService} from "./base.service";
import {environment} from "../../environments/environment";
import {Klijent} from "../model/klijent";


@Injectable({
  providedIn: 'root'
})
export class KlijentService extends BaseService{
    constructor(http: HttpClient) {
      super(`${environment.apiUrl}/klijenti`,http);
    }

    getKlijent(id: number): Observable<Klijent> {
      return this.getOne(id).pipe(map((responseBody) => responseBody as Klijent));
    }

    createKlijent(klijent: Klijent): Observable<number> {
      let {ime, prezime, naziv, adresa, pib, mesto, delatnost} = klijent;
      return this.create({ime, prezime, naziv, adresa, pib, mesto, delatnost});
    }

    updateKlijent(id: number, klijent: Klijent): Observable<void>{
      let {ime, prezime, naziv, adresa, pib, mesto, delatnost} = klijent;

      return this.update(id, {
        ime,
        prezime,
        naziv,
        adresa,
        pib,
        mesto,
        delatnost
      });
    }

    deleteKlijent(id: number): Observable<void>{
      return this.delete(id);
    }
}
