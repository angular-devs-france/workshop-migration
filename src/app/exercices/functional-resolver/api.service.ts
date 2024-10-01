import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Product} from "../signals-state/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProducts(): Observable<Product[]> {
    return of([
      {id: 1, name: 'foo', price: 32}
    ]);
  }
}
