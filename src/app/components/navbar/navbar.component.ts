import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('app-name') appName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
