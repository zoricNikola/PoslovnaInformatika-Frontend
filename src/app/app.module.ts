import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PoslovneBankeComponent } from './components/poslovne-banke/poslovne-banke.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccordionComponent } from './common/accordion/accordion.component';
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from './common/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PoslovneBankeComponent,
    NavbarComponent,
    AccordionComponent,
    ConfirmationDialogComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
