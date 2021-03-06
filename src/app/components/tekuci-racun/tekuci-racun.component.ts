import { Component, Input, OnInit } from '@angular/core';
import { TekuciRacunService } from '../../service/tekuci-racun.service';
import { Observable, of } from 'rxjs';
import { TekuciRacun } from '../../model/tekuci-racun';
import { ConfirmationDialogOptions } from '../../common/confirmation-dialog/confirmation-dialog.component';
import { FORM_STATE } from '../../model/common/form-state';
import { TekuciRacunFormDialogOptions } from './tekuci-racun-form-dialog/tekuci-racun-form-dialog.component';
import { take } from 'rxjs/operators';
import { PoslovnaBankaService } from 'src/app/service/poslovna-banka.service';

@Component({
  selector: '[tekuci-racun]',
  templateUrl: './tekuci-racun.component.html',
  styleUrls: ['./tekuci-racun.component.css'],
})
export class TekuciRacunComponent implements OnInit {
  @Input('sifraBanke') sifraBanke!: number;

  confirmationDialogOpened: boolean = false;
  confirmationDialogOptions: ConfirmationDialogOptions = {
    title: '',
    message: '',
    decline: () => {},
    confirm: () => {},
  };

  tekuciRacunFormDialogOpened: boolean = false;
  tekuciRacunFormDialogOptions: TekuciRacunFormDialogOptions = {
    state: FORM_STATE.ADD,
    cancel: () => {},
    save: (tekuciRacun: TekuciRacun) => {},
  };

  tekuciRacuni: Observable<TekuciRacun[]> = of();

  constructor(
    private tekuciRacunService: TekuciRacunService,
    private bankaService: PoslovnaBankaService
  ) {}

  fetchRacuni(): void {
    this.tekuciRacuni = this.bankaService.getPoslovnaBankaRacuni(
      this.sifraBanke
    );
  }

  ngOnInit(): void {
    this.fetchRacuni();
  }

  onTekuciRacunDelete(tekuciRacun: TekuciRacun): void {
    this.confirmationDialogOpened = true;

    this.confirmationDialogOptions = {
      title: `Obrisite ${tekuciRacun.klijent.prezime} tekuci racun`,
      message: `Da li ste sigurni?`,
      decline: () => {
        this.confirmationDialogOpened = false;
      },
      confirm: () => {
        this.tekuciRacunService
          .deleteTekuciRacun(tekuciRacun.brojRacuna)
          .pipe(take(1))
          .subscribe(() => {
            this.confirmationDialogOpened = false;
            this.fetchRacuni();
          });
      },
    };
  }

  onNewTekuciRacunClick(): void {
    this.tekuciRacunFormDialogOpened = true;

    this.tekuciRacunFormDialogOptions = {
      state: FORM_STATE.ADD,
      cancel: () => {
        this.tekuciRacunFormDialogOpened = false;
      },
      save: (tekuciRacun: TekuciRacun) => {
        console.dir(tekuciRacun);
        this.tekuciRacunService
          .createTekuciRacun(tekuciRacun)
          .pipe(take(1))
          .subscribe((id) => {
            this.tekuciRacunFormDialogOpened = false;

            this.fetchRacuni();
          });
      },
    };
  }
}
