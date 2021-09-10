import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Mesto} from "../model/mesto";

@Injectable({
  providedIn: 'root'
})
export class MestoService extends BaseService{

  constructor(http: HttpClient) {
    super(`${environment.apiUrl}/mesta`, http);
  }

  getAllMesto(): Observable<Mesto []>{
    return this.getAll();
  }
}
