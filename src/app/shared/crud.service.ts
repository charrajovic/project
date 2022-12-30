import { Observable } from 'rxjs';

export interface CrudService {
  getAll(): Observable<any>;

  add(produit): Observable<any>;

  update(produit): Observable<any>;

  delete(id): Observable<any>;
}
