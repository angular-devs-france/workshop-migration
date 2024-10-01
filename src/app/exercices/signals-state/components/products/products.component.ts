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
    {id: 1, name: 'Bananes', price: 30},
    {id: 2, name: 'Tomates', price: 20},
    {id: 3, name: 'Fraises', price: 20},
    {id: 4, name: 'Orange', price: 10},
    {id: 5, name: 'Pomme', price: 5},
  ];

  add(product: Product): void {
    this.cartService.addItem(product);
  }
}
