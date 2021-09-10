import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FORM_STATE} from "../../../model/common/form-state";
import {Klijent} from "../../../model/klijent";
import {NgForm} from "@angular/forms";
import {Observable, of} from "rxjs";
import {Delatnost} from "../../../model/delatnost";
import {Mesto} from "../../../model/mesto";
import {MestoService} from "../../../service/mesto.service";
import {DelatnostService} from "../../../service/delatnost.service";
import {map} from "rxjs/operators";

export interface KlijentFormDialogOptions {
  state: FORM_STATE;
  klijentForEdit: Klijent | undefined;
  cancel: () => void;
  save: (klijent: Klijent) => void;
}

@Component({
  selector: 'klijent-form-dialog',
  templateUrl: './klijent-form-dialog.component.html',
  styleUrls: ['./klijent-form-dialog.component.css']
})
export class KlijentFormDialogComponent implements OnInit, OnChanges {
  @Input('opened') opened = false;
  @Input('options') options!: KlijentFormDialogOptions;

  @ViewChild('f') form!: NgForm;

  klijent: Klijent = {
    ime: '',
    prezime: '',
    naziv: '',
    adresa: '',
    pib: 0,
    mesto: {
      postanskiBroj: 0,
      nazivMesta: '',
    },
    delatnost: {
      sifraDelatnosti: 0,
      nazivDelatnosti: '',
    }
  }

  originalKlijentName: string | undefined;

  delatnosti: Observable<Delatnost []> = of();
  mesta: Observable<Mesto []> = of();

  constructor(
    private mestoService: MestoService,
    private delatnostiService: DelatnostService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.options &&
      this.options.klijentForEdit &&
      this.options.state === FORM_STATE.EDIT
    ) {
      this.klijent = {...this.options.klijentForEdit};
      this.originalKlijentName = this.klijent.ime + ' ' + this.klijent.prezime;
    }
    if (
      changes.opened &&
      !changes.opened.firstChange &&
      !changes.opened.currentValue
    ) {
      setTimeout(() => {
        this.form.resetForm();
        this.klijent = {
          ime: '',
          prezime: '',
          naziv: '',
          adresa: '',
          pib: 0,
          mesto: {
            postanskiBroj: 0,
            nazivMesta: '',
          },
          delatnost: {
            sifraDelatnosti: 0,
            nazivDelatnosti: '',
          }
        };
        this.originalKlijentName = '';
      }, 300)
    }
  }

  ngOnInit(): void {
    this.delatnosti = this.delatnostiService.getAllDelatnost();
    this.mesta = this.mestoService.getAllMesto();
  }

  get FORM_STATE() {
    return FORM_STATE;
  }

  submit(){
    this.form.form.markAllAsTouched();

    if(this.form.valid){
      (document.activeElement as HTMLElement).blur();
      this.options.save(this.klijent);
    }
  }

}
