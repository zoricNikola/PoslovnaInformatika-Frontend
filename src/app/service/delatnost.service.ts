import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Delatnost} from "../model/delatnost";

@Injectable({
  providedIn: 'root'
})
export class DelatnostService extends BaseService{

  constructor(http: HttpClient) {
    super(`${environment.apiUrl}/delatnosti`, http);
  }

  getAllDelatnost(): Observable<Delatnost []> {
    return this.getAll();
  }
}
