import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Title} from "@angular/platform-browser";

import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';

import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit{
  produits: Produit[];
  operation: string = 'add';
  selectedProduit: Produit;
  produitForm: FormGroup;
  constructor(private produitService: ProduitService,private fb: FormBuilder,private route: ActivatedRoute, private cookieService: CookieService,private titleService:Title)
  {
    this.titleService.setTitle("Produits");
    this.produits = [];
    this.selectedProduit = new Produit();
    this.produitForm;
    this.createForm();
  }

  ngOnInit()
  {
    console.log(JSON.parse(localStorage.getItem("session") || '{}').authorities[0].authority)
    const response = this.cookieService.get('response');
    console.log('retrievedObject: ', JSON.parse(response));
    console.log('hola: ', JSON.parse(response).authorities[0].authority);
    this.initProduit();
    this.produits = this.route.snapshot.data["produits"];
    this.loadProduits();
  }

  createForm()
  {
    this.produitForm = this.fb.group({
      ref: ['',Validators.required],
      quantite: '',
      prixUnitaire: ''
    })
  }

  loadProduits()
  {
    this.produitService.getAll().subscribe(
      data => {this.produits = data},
      error => {console.log('error')},
      () => {console.log('Loading data was done.')}
    );
  }

  addProduit()
  {
    const p = this.produitForm.value;
    console.log(this.produitForm)
    this.produitService.add(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  updateProduit()
  {
    const p = this.produitForm.value;
    this.produitService.update(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  deleteProduit()
  {
    const p = this.produitForm.value;
    this.produitService.delete(this.selectedProduit.id as number).subscribe(
      res => {
        this.selectedProduit = new Produit();
        this.loadProduits();
      }
    );
  }

  initProduit()
  {
    this.selectedProduit = new Produit();
    this.createForm();
  }

  adding()
  {
    this.selectedProduit = new Produit();
  }


}
