import {Routes} from "@angular/router";
import {ContainerComponent} from "./container.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/products/products.component')
      },
      {
        path: 'cart',
        loadComponent: () => import('./components/cart/cart.component')
      }
    ]
  },
];
