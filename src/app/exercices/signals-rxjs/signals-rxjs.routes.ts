import {Routes} from "@angular/router";

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/signals-rxjs-home/signals-rxjs-home.component')
  },
  {
    path: 'basket',
    loadComponent: () => import('./components/signals-rxjs-basket/signals-rxjs-basket.component')
  }
];
