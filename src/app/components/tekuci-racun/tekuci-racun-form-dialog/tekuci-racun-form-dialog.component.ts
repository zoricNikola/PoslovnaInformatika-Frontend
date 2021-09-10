import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Klijent} from "../../../model/klijent";
import {Observable, of} from "rxjs";
import {PoslovnaBanka} from "../../../model/poslovna-banka";
import {FORM_STATE} from "../../../model/common/form-state";
import {PoslovnaBankaService} from "../../../service/poslovna-banka.service";
import {KlijentFormDialogOptions} from "../../klijent/klijent-form-dialog/klijent-form-dialog.component";
import {TekuciRacun} from "../../../model/tekuci-racun";
import {take} from "rxjs/operators";
import {NgForm} from "@angular/forms";

export interface TekuciRacunFormDialogOptions {
  state: FORM_STATE;
  cancel: () => void;
  save: (tekuciRacun: TekuciRacun) => void;
}

@Component({
  selector: 'app-tekuci-racun-form-dialog',
  templateUrl: './tekuci-racun-form-dialog.component.html',
  styleUrls: ['./tekuci-racun-form-dialog.component.css']
})
export class TekuciRacunFormDialogComponent implements OnInit {
  @Input('selectedKlijent') selectedKlijent: Klijent | undefined = undefined;
  @Input('selectable') selectable = true;
  @Input('options') options!: TekuciRacunFormDialogOptions;
  @Input('opened') opened = false;
  @ViewChild('f') form!: NgForm;

  poslovneBanke: Observable<PoslovnaBanka []> = of();

  klijentFormDialogOpened: boolean = false;
  klijentFormDialogOptions: KlijentFormDialogOptions = {
    state: FORM_STATE.ADD,
    klijentForEdit: undefined,
    cancel: () => {},
    save: (klijent: Klijent) => {},
  };

  tekuciRacun: TekuciRacun = {
    poslovnaBanka: {
      nazivBanke: '',
      obracunskiRacun: {
        brojObracunskogRacuna: '',
      },
      swiftKod: '',
    },
    klijent:{
      ime: '',
      prezime: '',
      naziv: '',
      adresa: '',
      pib: 0,
      mesto: {
        id: 0,
        postanskiBroj: 0,
        nazivMesta: '',
      },
      delatnost: {
        id:0,
        sifraDelatnosti: 0,
        nazivDelatnosti: '',
      }
    }
  };

  postojeciKlijentIzborOpened = false;

  constructor(
    private poslovnaBankaService: PoslovnaBankaService
  ) { }

  ngOnInit(): void {
    this.poslovneBanke = this.poslovnaBankaService.getPoslovneBanke();
  }

  get FORM_STATE() {
    return FORM_STATE;
  }

  submit(){
    this.form.form.markAllAsTouched();

    if(this.form.valid){
      (document.activeElement as HTMLElement).blur();
      this.options.save(this.tekuciRacun);
    }
  }

  bindKlijent(klijent: Klijent) {
    this.tekuciRacun.klijent = klijent;
  }

  onPostojeciKlijentClick(){

  }

  onNewKlijentClick(){
    this.klijentFormDialogOpened = true;

    this.klijentFormDialogOptions = {
      state: FORM_STATE.ADD,
      klijentForEdit: undefined,
      cancel: () => {
        this.klijentFormDialogOpened = false;
      },
      save: (klijent: Klijent) => {
        this.bindKlijent(klijent);
        console.log(klijent);
        this.klijentFormDialogOpened = false;
      }
    };
  }
}
