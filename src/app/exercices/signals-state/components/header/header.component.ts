import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatBadge} from "@angular/material/badge";
import {RouterLink} from "@angular/router";
import {CartService} from "../../cart.service";
import {MatIconAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    MatBadge,
    RouterLink,
    MatIconAnchor,
    MatIcon
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  cart$ = inject(CartService).cart$;
}
