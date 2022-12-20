import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'

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
  constructor(private produitService: ProduitService,private fb: FormBuilder,private route: ActivatedRoute)
  {
    this.produits = [];
    this.selectedProduit = new Produit();
    this.produitForm;
    this.createForm();
  }

  ngOnInit()
  {
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
    this.produitService.getProduits().subscribe(
      data => {this.produits = data},
      error => {console.log('error')},
      () => {console.log('Loading data was done.')}
    );
  }

  addProduit()
  {
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  updateProduit()
  {
    const p = this.produitForm.value;
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  deleteProduit()
  {
    const p = this.produitForm.value;
    this.produitService.deleteProduit(this.selectedProduit.ref as string).subscribe(
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
