import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('app-name') appName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isActive(route: string): boolean {
    if(route === '/klijent'){
      return this.router.isActive('/klijent', false);
    }

    return this.router.isActive(route, false);
  }



}
