import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {CartService} from "../../cart.service";
import {MatButton} from "@angular/material/button";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButton
  ],
  templateUrl: './basket.component.html'
})
export default class BasketComponent {
  private cartService = inject(CartService);
  cart$ = this.cartService.cart$;

  removeItem(id: number): void {
    this.cartService.removeItem(id);
  }

  computeTotalCost(cart: Product[]): number {
    return cart.reduce((total, item) => total + item.price, 0);
  }
}
