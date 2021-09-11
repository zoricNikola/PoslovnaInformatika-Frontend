import { Component, Input, OnInit } from '@angular/core';
import { PorukaIzvoda } from './../../../model/poruka-izvoda';

@Component({
  selector: '[poruka-izvoda]',
  templateUrl: './poruka.component.html',
  styleUrls: ['./poruka.component.css'],
})
export class PorukaComponent implements OnInit {
  @Input('poruka') poruka!: PorukaIzvoda;

  showNalozi: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
