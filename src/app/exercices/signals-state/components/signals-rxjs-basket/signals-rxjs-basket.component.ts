import {Component, inject} from '@angular/core';
import {SignalsRxjsService} from "../../signals-rxjs.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-signals-rxjs-basket',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './signals-rxjs-basket.component.html',
  styleUrl: './signals-rxjs-basket.component.css'
})
export  default class SignalsRxjsBasketComponent {
  private readonly basketService = inject(SignalsRxjsService);
  protected readonly basket$ = this.basketService.basket$;

  removeItem(item: any) {
    this.basketService.removeItem(item);
  }

  computeTotalCost(list: any) {
    return 0;
  }

}
