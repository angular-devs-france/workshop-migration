import {Routes} from "@angular/router";
import {GuardContainerComponent} from "./internals/components/guard-container/guard-container.component";
import {GuardHomeComponent} from "./internals/components/guard-home/guard-home.component";
import {AuthGuard} from "./auth.guard";
import {GuardAuthenticatedComponent} from "./internals/components/guard-authenticated/guard-authenticated.component";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: GuardContainerComponent,
    children: [
      {
        path: '',
        component: GuardHomeComponent
      },
      {
        path: 'authorized',
        component: GuardAuthenticatedComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
