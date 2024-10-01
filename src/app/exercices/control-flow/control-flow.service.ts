import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Product} from "../signals-state/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ControlFlowService {

  search(searchTerm: string): Observable<Product[]> {
    return of([
      {id: 1, name: 'foo', price: 30}
    ]).pipe(
      map(data => data.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }
}
