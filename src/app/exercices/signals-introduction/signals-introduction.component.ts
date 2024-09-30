import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-signals-introduction',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './signals-introduction.component.html',
  styleUrl: './signals-introduction.component.css'
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
