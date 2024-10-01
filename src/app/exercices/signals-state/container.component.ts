import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {
  snackBar = inject(MatSnackBar);
  cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.snackBar.open('Cart updated!', '',  {duration: 1000})
    });
  }
}
