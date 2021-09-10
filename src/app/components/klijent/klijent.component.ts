import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from "rxjs";
import {Klijent} from "../../model/klijent";
import {KlijentService} from "../../service/klijent.service";
import {FORM_STATE} from "../../model/common/form-state";
import {ConfirmationDialogOptions} from "../../common/confirmation-dialog/confirmation-dialog.component";
import {take} from "rxjs/operators";
import {KlijentFormDialogOptions} from "./klijent-form-dialog/klijent-form-dialog.component";

@Component({
  selector: '[klijent]',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {
  @Input('selectable') selectable = false;
  @Output('itemTake') klijentTake: EventEmitter<Klijent> = new EventEmitter<Klijent>();

  selectedKlijent: Klijent | undefined = undefined;

  klijenti: Observable<Klijent []> = of();

  klijentFormDialogOpened: boolean = false;
  klijentFormDialogOptions: KlijentFormDialogOptions = {
    state: FORM_STATE.ADD,
    klijentForEdit: undefined,
    cancel: () => {},
    save: (klijent: Klijent) => {},
  };

  confirmationDialogOpened: boolean = false;
  confirmationDialogOptions: ConfirmationDialogOptions = {
    title: '',
    message: '',
    decline: () => {},
    confirm: () => {},
  };

  constructor(private klijentService: KlijentService) { }

  ngOnInit(): void {
    this.klijenti = this.klijentService.getAllKlijent();
  }

  onKlijentSelect(klijent: Klijent): void {
    this.selectedKlijent = this.selectedKlijent === klijent ? undefined : klijent;
  }

  onKlijentTake(): void {
    let klijent: Klijent = {...this.selectedKlijent as Klijent};
    this.selectedKlijent = undefined;
    this.klijentTake.emit(klijent);
    console.log(klijent);
  }

  onNewKlijentClick(): void {
    this.klijentFormDialogOpened = true;

    this.klijentFormDialogOptions = {
      state: FORM_STATE.ADD,
      klijentForEdit: undefined,
      cancel: () => {
        this.klijentFormDialogOpened = false;
      },
      save: (klijent: Klijent) => {
        this.klijentService.createKlijent(klijent)
          .pipe(take(1))
          .subscribe((id) => {
            this.klijentFormDialogOpened = false;
            window.location.reload();
          });
      }
    };
  }

  onEditKlijentClick(klijent: Klijent): void {
    this.klijentFormDialogOpened = true;

    this.klijentFormDialogOptions = {
      state: FORM_STATE.EDIT,
      klijentForEdit: klijent,
      cancel: () => {
        this.klijentFormDialogOpened = false;
      },
      save: (klijent: Klijent) => {
        this.klijentService.updateKlijent(klijent.id!, klijent)
          .pipe(take(1))
          .subscribe(() => {
            this.klijentFormDialogOpened = false;
            window.location.reload();
          });
      }
    };
  }

  onKlijentDelete(klijent: Klijent): void {
    this.confirmationDialogOpened = true;

    this.confirmationDialogOptions = {
      title: `Delete ${klijent.ime} ${klijent.prezime}`,
      message: `Da li ste sigurni?`,
      decline: () => {
        this.confirmationDialogOpened = false;
      },
      confirm: () => {
        this.klijentService.deleteKlijent(klijent.id!)
          .pipe(take(1))
          .subscribe(() => {
            this.confirmationDialogOpened = false;
            window.location.reload();
          });
      }
    };
  }
}
