import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmingComponent } from './adming/adming.component';
const routes: Routes = [
  { path: '', component: AdmingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
