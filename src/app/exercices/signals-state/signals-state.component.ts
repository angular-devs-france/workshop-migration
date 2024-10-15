import { Component, inject, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from './internals/product.model';
import { MatCard, MatCardActions, MatCardHeader } from '@angular/material/card';
import { MatButton, MatIconAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { MatBadge } from '@angular/material/badge';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signals-state',
  templateUrl: './signals-state.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    RouterLink,
    MatIcon,
    MatIconAnchor,
    AsyncPipe,
    MatBadge,
  ],
})
export class SignalsStateComponent implements OnInit {
  private cartService = inject(CartService);
  private snackbar = inject(MatSnackBar);

  cart$ = this.cartService.cart$;

  products: Product[] = [
    { id: 1, name: 'Bananes', price: 30 },
    { id: 2, name: 'Tomates', price: 20 },
    { id: 3, name: 'Fraises', price: 20 },
    { id: 4, name: 'Orange', price: 10 },
    { id: 5, name: 'Pomme', price: 5 },
  ];

  ngOnInit(): void {
    this.cart$.subscribe((products) => {
      if (products.length) {
        this.snackbar.open('Produit ajouté au panier', '', {
          duration: 1000,
        });
      }
    });
  }

  add(product: Product): void {
    this.cartService.addItem(product);
  }

  getTotalPrice(products: Product[]): number {
    return products.reduce((acc, product) => acc + product.price, 0);
  }
}
