import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()

export class ProduitMuckService{
  private PRODUITS: Produit[] = [];
  constructor()
  {
    let p1: Produit = new Produit(1,'Livre',50,20);
    let p2: Produit = new Produit(2,'cahier',20,25);
    let p3: Produit = new Produit(3,'haytem',250,120);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }
  public getProduits(): Produit[]{
    return this.PRODUITS;
  }
}
