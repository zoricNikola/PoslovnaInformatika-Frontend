import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FORM_STATE } from 'src/app/model/common/form-state';
import { PoslovnaBanka } from 'src/app/model/poslovna-banka';

export interface PoslovnaBankaFormDialogOptions{
  state: FORM_STATE;
  cancel: () => void;
  save: (poslovnaBanka: PoslovnaBanka) => void;
}

@Component({
  selector: 'app-poslovna-banka-form-dialog',
  templateUrl: './poslovna-banka-form-dialog.component.html',
  styleUrls: ['./poslovna-banka-form-dialog.component.css']
})
export class PoslovnaBankaFormDialogComponent implements OnInit, OnChanges {

  @Input('options') options!: PoslovnaBankaFormDialogOptions;
  @Input('opened') opened: boolean = false;
  @ViewChild('f') form!: NgForm;

  poslovnaBanka: PoslovnaBanka = {
    sifraBanke: 0,
    swiftKod: '',
    nazivBanke: '',
    obracunskiRacun: {
      brojObracunskogRacuna: ''
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    if(changes.opened &&
        !changes.opened.firstChange &&
        !changes.opened.currentValue) {
        setTimeout(() => {
          this.form.resetForm();
          this.poslovnaBanka = {
            sifraBanke: 0,
            swiftKod: '',
            nazivBanke: '',
            obracunskiRacun: {
            brojObracunskogRacuna: ''}
          }
        }, 300);
      } 
  }

  get FORM_STATE() {
    return FORM_STATE;
  }

  submit() {
    this.form.form.markAllAsTouched();

    if (this.form.valid) {
      (document.activeElement as HTMLElement).blur();
      this.options.save(this.poslovnaBanka);
    }
  }

}
