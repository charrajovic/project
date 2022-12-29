import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitMuckService} from './produit/produit.mock.service';
import {Produit} from './shared/produit';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProduitService} from './produit/produit.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppService} from './app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { XhrInterceptor } from './xhr.interceptor';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProduitMuckService,
    ProduitService,
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
   CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
