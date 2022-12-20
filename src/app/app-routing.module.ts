import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProduitComponent} from './produit/produit.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
  { path: 'produit', component: ProduitComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
