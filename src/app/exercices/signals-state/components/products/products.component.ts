import {Component, inject} from '@angular/core';
import {CartService} from "../../cart.service";
import {Product} from "../../models/product.model";
import {MatCard, MatCardActions, MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatButton
  ],
  templateUrl: './products.component.html'
})
export default class ProductsComponent {
  private cartService = inject(CartService);
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 123 },
    { id: 2, name: 'Product 2', price: 456 },
    { id: 3, name: 'Product 3', price: 789 },
    { id: 4, name: 'Product 4', price: 789 },
  ];

  add(product: Product): void {
    this.cartService.addItem(product);
  }
}
