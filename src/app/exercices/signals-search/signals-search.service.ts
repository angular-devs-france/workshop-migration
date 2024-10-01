import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Product} from "../signals-state/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class SignalsSearchService {

  search(searchTerm: string): Observable<Product[]> {
    return of([
      {id: 1, name: 'Bananes', price: 30},
      {id: 2, name: 'Tomates', price: 20},
      {id: 3, name: 'Fraises', price: 20},
      {id: 4, name: 'Orange', price: 10},
      {id: 5, name: 'Pomme', price: 5},
    ]).pipe(
      map(data =>
        searchTerm.length
          ? data.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase()))
          : []
      )
    );
  }
}
