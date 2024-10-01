import { Injectable } from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {Product} from "./models/product.model";

@Injectable({
  providedIn: 'root'
})
export class SignalsRxjsService {
  readonly #basketSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  readonly basket$ = this.#basketSubject.asObservable();

  constructor() { }

  addItem(product: Product) {
    this.basket$.pipe(take(1)).subscribe(value => {
      this.#basketSubject.next([
        ...value,
        product
      ]);
    });
  }

  removeItem(product: Product) {
    this.basket$.pipe(take(1)).subscribe(value => {
      this.#basketSubject.next(value);
    });
  }
}
