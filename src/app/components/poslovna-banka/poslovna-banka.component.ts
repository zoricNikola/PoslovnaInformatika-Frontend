import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoslovnaBanka } from './../../model/poslovna-banka';
import { PoslovnaBankaService } from 'src/app/service/poslovna-banka.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-poslovna-banka',
  templateUrl: './poslovna-banka.component.html',
  styleUrls: ['./poslovna-banka.component.css'],
})
export class PoslovnaBankaComponent implements OnInit {
  banka!: PoslovnaBanka;

  showKlijenti: boolean = false;
  showRacuni: boolean = false;
  showIzvod: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bankaService: PoslovnaBankaService
  ) {}

  ngOnInit(): void {
    const sifraBanke: number = this.route.snapshot.params.id;

    this.bankaService
      .getPoslovnaBanka(sifraBanke)
      .pipe(take(1))
      .subscribe((banka: PoslovnaBanka) => {
        this.banka = banka;
        console.log(this.banka);
      });
  }
}
