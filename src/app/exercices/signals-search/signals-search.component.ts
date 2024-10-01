import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {switchMap} from "rxjs";
import {SignalsSearchService} from "./signals-search.service";

@Component({
  selector: 'app-signals-search',
  standalone: true,
  imports: [
    AsyncPipe,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './signals-search.component.html',
  styles: [`
    :host {
      @apply flex flex-col;
    }
  `]
})
export class SignalsSearchComponent {
  private service = inject(SignalsSearchService);
  searchControl = new FormControl<string>('', {nonNullable: true});

  list$ = this.searchControl.valueChanges.pipe(
    switchMap(value => this.service.search(value))
  );
}
