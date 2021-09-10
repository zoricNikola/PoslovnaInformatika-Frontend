import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoslovneBankeComponent } from './components/poslovne-banke/poslovne-banke.component';
import {KlijentComponent} from "./components/klijent/klijent.component";
import {TekuciRacunComponent} from "./components/tekuci-racun/tekuci-racun.component";
import {PoslovnaBankaComponent} from "./components/poslovna-banka/poslovna-banka.component";

const routes: Routes = [
  { path: '', redirectTo: 'poslovne-banke', pathMatch: 'full'},
  { path: 'poslovne-banke', component: PoslovneBankeComponent },
  { path: 'poslovne-banke/:id', component: PoslovnaBankaComponent},
  { path: 'klijent', component: KlijentComponent},
  { path: 'tekuci-racun', component: TekuciRacunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
