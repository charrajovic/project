import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProduitResolver} from './produit/produit.resolver';
import {UserResolver} from './user/user.resolver';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent , children: [{ path: 'dashboard', component: DashboardComponent, resolve: {produits: ProduitResolver}, outlet: 'contentOutlet' },
    { path: 'produit', component: ProduitComponent, outlet: 'contentOutlet' },
    { path: 'user', component: UserComponent,resolve: {users: UserResolver}, outlet: 'contentOutlet' },]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProduitResolver,UserResolver]
})
export class AppRoutingModule { }
