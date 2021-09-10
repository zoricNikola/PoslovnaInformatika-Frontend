import { Component, OnInit } from '@angular/core';
import { PoslovnaBanka } from 'src/app/model/poslovna-banka';
import { PoslovnaBankaService } from 'src/app/service/poslovna-banka.service';

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

}
