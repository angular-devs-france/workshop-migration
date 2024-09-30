import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ControlFlowService} from "./control-flow.service";
import {switchMap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    MatFormField,
    MatInput,
    MatLabel
  ],
  standalone: true
})
export class ControlFlowComponent {
  readonly #service = inject(ControlFlowService);
  searchControl = new FormControl<string>('', {nonNullable: true});

  list$ = this.searchControl.valueChanges.pipe(
    switchMap(value => this.#service.search(value))
  );
}
