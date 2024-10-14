import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {Product} from "./internals/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  totalPrice$ = this.cart$.pipe(
    map((products) => products.reduce((acc, product) => acc + product.price, 0))
  );

  addItem(product: Product) {
      this.cartSubject.next([
        ...this.cartSubject.value,
        product
      ]);
  }
}
