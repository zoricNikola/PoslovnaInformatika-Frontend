import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoslovneBankeComponent } from './components/poslovne-banke/poslovne-banke.component';
import { PoslovnaBankaComponent } from './components/poslovna-banka/poslovna-banka.component';
import { StanjaComponent } from './components/stanja/stanja.component';

const routes: Routes = [
  { path: '', redirectTo: 'poslovne-banke', pathMatch: 'full' },
  { path: 'poslovne-banke', component: PoslovneBankeComponent },
  { path: 'poslovne-banke/:id', component: PoslovnaBankaComponent },
  { path: 'stanja', component: StanjaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
