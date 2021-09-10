import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoslovneBankeComponent } from './components/poslovne-banke/poslovne-banke.component';
import {KlijentComponent} from "./components/klijent/klijent.component";

const routes: Routes = [
  { path: '', component: PoslovneBankeComponent },
  { path: 'klijent', component: KlijentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
