import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./technical/home/home.component";
import {AuthGuard} from "./exercices/functional-guard/auth.guard";

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
    loadComponent: () => import('./exercices/control-flow/control-flow.component').then(m => m.ControlFlowComponent)
  },
  {
    path: 'signals-introduction',
    loadComponent: () => import('./exercices/signals-introduction/signals-introduction.component').then(m => m.SignalsIntroductionComponent)
  },
  {
    path: 'functional-guard',
    loadComponent: () => import('./exercices/functional-guard/functional-guard.component').then(m => m.FunctionalGuardComponent),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
