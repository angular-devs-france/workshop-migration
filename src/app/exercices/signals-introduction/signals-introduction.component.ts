import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-signals-introduction',
  standalone: true,
  imports: [MatButton],
  templateUrl: './signals-introduction.component.html',
  styles: [
    `
      :host {
        @apply flex flex-col items-center gap-4;
      }

      button {
        @apply min-w-32;
      }
    `,
  ],
})
export class SignalsIntroductionComponent {
  count = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
}
