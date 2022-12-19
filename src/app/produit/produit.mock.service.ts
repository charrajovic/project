import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()

export class ProduitMuckService{
  private PRODUITS: Produit[] = [];
  constructor()
  {
    let p1: Produit = new Produit('Livre',50,20);
    let p2: Produit = new Produit('cahier',20,25);
    let p3: Produit = new Produit('stylo',250,120);
    let p4: Produit = new Produit('haytem',999,99);
    let p5: Produit = new Produit('walo',2,8);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
    this.PRODUITS.push(p5);
  }
  public getProduits(): Produit[]{
    return this.PRODUITS;
  }
}
