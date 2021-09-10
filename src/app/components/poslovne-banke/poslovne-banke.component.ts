import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { FORM_STATE } from 'src/app/model/common/form-state';
import { PoslovnaBanka } from 'src/app/model/poslovna-banka';
import { PoslovnaBankaService } from 'src/app/service/poslovna-banka.service';
import { PoslovnaBankaFormDialogOptions } from './poslovna-banka-form-dialog/poslovna-banka-form-dialog.component';

@Component({
  selector: 'app-poslovne-banke',
  templateUrl: './poslovne-banke.component.html',
  styleUrls: ['./poslovne-banke.component.css']
})
export class PoslovneBankeComponent implements OnInit {

  poslovneBanke: PoslovnaBanka[] = [];

  constructor(private poslovnaBankaService: PoslovnaBankaService) { }

  ngOnInit(): void {
    this.loadPoslovneBanke();
  }

  loadPoslovneBanke(): void {
    this.poslovnaBankaService.getPoslovneBanke().subscribe(result => this.poslovneBanke = result);
  }

  poslovnaBankaFormDialogOpened: boolean = false;

  poslovnaBankaFormDialogOptions: PoslovnaBankaFormDialogOptions = {
    state: FORM_STATE.ADD,
    cancel: () => {},
    save: (poslovnaBanka: PoslovnaBanka) => {},
  };

  dodajPoslovnuBanku(): void {
    this.poslovnaBankaFormDialogOpened = true;
    this.poslovnaBankaFormDialogOptions = {
      state: FORM_STATE.ADD,
      cancel: () => {this.poslovnaBankaFormDialogOpened = false;},
      save: (poslovnaBanka: PoslovnaBanka) => {
        this.poslovnaBankaService
            .createPoslovnaBanka(poslovnaBanka)
            .pipe(take(1))
            .subscribe( (id) => {
              console.log("Poslovna banka sa id " + id + " je kreirana!");
              this.poslovnaBankaFormDialogOpened = false;
              this.loadPoslovneBanke();
            });
      } 
    }
  }

}
