import {Component, inject} from '@angular/core';
import {Product} from "../../models/product.model";
import {MatCard, MatCardActions, MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {SignalsRxjsService} from "../../signals-rxjs.service";

@Component({
  selector: 'app-signals-rxjs-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton
  ],
  templateUrl: './signals-rxjs-home.component.html',
  styleUrl: './signals-rxjs-home.component.css'
})
export default class SignalsRxjsHomeComponent {
  readonly #basketService = inject(SignalsRxjsService);
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 123 },
    { id: 1, name: 'Product 2', price: 456 },
    { id: 1, name: 'Product 3', price: 789 },
  ];

  add(product: Product) {
    this.#basketService.addItem(product);
  }
}
