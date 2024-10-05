import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./technical/home/home.component";
import {ProductsResolver} from "./exercices-bonus/functional-resolver/products.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'standalone',
    loadChildren: () => import('./exercices/standalone/standalone.module').then(m => m.StandaloneModule)
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./exercices/control-flow/control-flow.component').then(c => c.ControlFlowComponent)
  },
  {
    path: 'control-flow-switch',
    loadComponent: () => import('./exercices/control-flow-switch/login-status.component').then(c => c.LoginStatusComponent)
  },
  {
    path: 'signals-introduction',
    loadComponent: () => import('./exercices/signals-introduction/signals-introduction.component').then(c => c.SignalsIntroductionComponent)
  },
  {
    path: 'signals-state',
    loadChildren: () => import('./exercices/signals-state/signals-state.routes').then(r => r.ROUTES)
  },
  {
    path: 'signals-search',
    loadComponent: () => import('./exercices/signals-search/signals-search.component').then(c => c.SignalsSearchComponent)
  },
  {
    path: 'functional-guard',
    loadChildren: () => import('./exercices/functional-guard/auth.routes').then(r => r.AUTH_ROUTES),
  },
  {
    path: 'functional-resolver',
    loadComponent: () => import('./exercices-bonus/functional-resolver/functional-resolver.component').then(c => c.FunctionalResolverComponent),
    resolve: {
      products: ProductsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
