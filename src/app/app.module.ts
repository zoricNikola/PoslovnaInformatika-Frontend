import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PoslovneBankeComponent } from './components/poslovne-banke/poslovne-banke.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccordionComponent } from './common/accordion/accordion.component';
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from './common/dialog/dialog.component';
import { PoslovnaBankaFormDialogComponent } from './components/poslovne-banke/poslovna-banka-form-dialog/poslovna-banka-form-dialog.component';
import {KlijentComponent} from "./components/klijent/klijent.component";
import {KlijentFormDialogComponent} from "./components/klijent/klijent-form-dialog/klijent-form-dialog.component";
import { TekuciRacunComponent } from './components/tekuci-racun/tekuci-racun.component';
import { TekuciRacunFormDialogComponent } from './components/tekuci-racun/tekuci-racun-form-dialog/tekuci-racun-form-dialog.component';
import { PoslovnaBankaComponent } from './components/poslovna-banka/poslovna-banka.component';
import { IzvodComponent } from './components/izvod/izvod.component';
import { PorukaComponent } from './components/izvod/poruka/poruka.component';
import { StanjaComponent } from './components/stanja/stanja.component';

@NgModule({
  declarations: [
    AppComponent,
    PoslovneBankeComponent,
    NavbarComponent,
    AccordionComponent,
    ConfirmationDialogComponent,
    DialogComponent,
    PoslovnaBankaFormDialogComponent,
    KlijentComponent,
    KlijentFormDialogComponent,
    TekuciRacunComponent,
    TekuciRacunFormDialogComponent,
    PoslovnaBankaComponent,
    IzvodComponent,
    PorukaComponent,
    StanjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
