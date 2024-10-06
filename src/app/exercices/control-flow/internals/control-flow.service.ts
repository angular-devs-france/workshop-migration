import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../signals-state/internals/product.model';

@Injectable({
  providedIn: 'root',
})
export class ControlFlowService {
  data = [
    { id: 1, name: 'Bananes', price: 30 },
    { id: 2, name: 'Tomates', price: 20 },
    { id: 3, name: 'Fraises', price: 20 },
    { id: 4, name: 'Orange', price: 10 },
    { id: 5, name: 'Pomme', price: 5 },
  ];

  search(searchTerm: string): Observable<Product[]> {
    return searchTerm.length
      ? of(
          this.data.filter((x) =>
            x.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : of(this.data);
  }
}
