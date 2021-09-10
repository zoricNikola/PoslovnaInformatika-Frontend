import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoslovneBankeComponent } from './components/poslovne-banke/poslovne-banke.component';
import {KlijentComponent} from "./components/klijent/klijent.component";
import {TekuciRacunComponent} from "./components/tekuci-racun/tekuci-racun.component";

const routes: Routes = [
  { path: '', component: PoslovneBankeComponent },
  { path: 'klijent', component: KlijentComponent},
  { path: 'tekuci-racun', component: TekuciRacunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
