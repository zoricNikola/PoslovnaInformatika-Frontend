import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IzvodRacuna } from 'src/app/model/izvod-racuna';
import { PoslovnaBankaService } from 'src/app/service/poslovna-banka.service';
import { of } from 'rxjs';

@Component({
  selector: '[izvod]',
  templateUrl: './izvod.component.html',
  styleUrls: ['./izvod.component.css'],
})
export class IzvodComponent implements OnInit, OnChanges {
  @Input('opened') opened!: boolean;
  @Input('sifraBanke') sifraBanke!: number;
  startDate: Date | null = null;
  endDate: Date | null = null;

  izvod: Observable<IzvodRacuna> = of();

  constructor(private bankaService: PoslovnaBankaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.opened.currentValue) {
      this.startDate = null;
      this.endDate = null;
      this.izvod = of();
    }
  }

  ngOnInit(): void {}

  generate(): void {
    this.izvod = this.bankaService.getIzvodPoslovneBanke(
      this.sifraBanke,
      this.startDate!,
      this.endDate!
    );
  }
}
