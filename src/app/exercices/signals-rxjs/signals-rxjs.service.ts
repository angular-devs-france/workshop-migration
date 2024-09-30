import { Injectable } from '@angular/core';
import {BehaviorSubject, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignalsRxjsService {
  readonly #basketSubject = new BehaviorSubject([]);
  readonly basket$ = this.#basketSubject.asObservable();

  constructor() { }

  addItem(item: any) {
    this.basket$.pipe(take(1)).subscribe(value => {
      this.#basketSubject.next(value);
    });
  }

  removeItem(item: any) {
    this.basket$.pipe(take(1)).subscribe(value => {
      this.#basketSubject.next(value);
    });
  }
}
