import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StanjeRacuna } from 'src/app/model/stanje-racuna';
import { ObracunskiRacunService } from './../../service/obracunski-racun.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-stanja',
  templateUrl: './stanja.component.html',
  styleUrls: ['./stanja.component.css'],
})
export class StanjaComponent implements OnInit {
  date: Date | null = null;

  stanja: Observable<StanjeRacuna[]> = of();

  constructor(private racunService: ObracunskiRacunService) {}

  ngOnInit(): void {}

  fetchStanja(date: Date): void {
    this.date = date;
    if (!this.date) return;

    this.stanja = this.racunService.getStanjaRacuna(this.date);
  }
}
