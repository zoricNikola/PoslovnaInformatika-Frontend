import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoslovneBankeComponent } from './components/poslovne-banke/poslovne-banke.component';

const routes: Routes = [
  { path: '', component: PoslovneBankeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
