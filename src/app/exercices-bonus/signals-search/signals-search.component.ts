import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { startWith, switchMap } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SignalsSearchService } from './signals-search.service';

@Component({
  selector: 'app-signals-search',
  templateUrl: './signals-search.component.html',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    MatFormField,
    MatInput,
    MatLabel,
  ],
  standalone: true,
  styles: [
    `
      :host {
        @apply flex flex-col;
      }
    `,
  ],
})
export class SignalsSearchComponent {
  private service = inject(SignalsSearchService);
  searchControl = new FormControl<string>('', { nonNullable: true });

  list$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    switchMap((value) => this.service.search(value))
  );
}
