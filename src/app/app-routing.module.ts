import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProduitResolver} from './produit/produit.resolver';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent, resolve: {produits: ProduitResolver} },
  { path: 'produit', component: ProduitComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }
