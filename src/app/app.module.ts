import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    PoslovneBankeComponent,
    NavbarComponent,
    AccordionComponent,
    ConfirmationDialogComponent,
    DialogComponent,
    PoslovnaBankaFormDialogComponent
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
