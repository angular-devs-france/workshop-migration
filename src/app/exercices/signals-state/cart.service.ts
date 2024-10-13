import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "./internals/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addItem(product: Product) {
      this.cartSubject.next([
        ...this.cartSubject.value,
        product
      ]);
  }
}
