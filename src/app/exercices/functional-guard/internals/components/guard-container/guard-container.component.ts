import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatAnchor, MatButton, MatIconAnchor } from '@angular/material/button';
import { AuthService } from '../../auth.service';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-guard-container',
  templateUrl: './guard-container.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    AsyncPipe,
    MatIcon,
    MatIconAnchor,
    MatAnchor,
    RouterLink,
  ],
})
export class GuardContainerComponent {
  authService = inject(AuthService);
  isLoggedIn$ = this.authService.isLoggedIn$;

  login(): void {
    this.authService.login();
  }
  logout(): void {
    this.authService.logout();
  }
}
