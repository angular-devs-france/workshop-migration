import {Component, inject} from '@angular/core';
import {SignalsRxjsService} from "../../signals-rxjs.service";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signals-rxjs-header',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './signals-rxjs-header.component.html',
  styleUrl: './signals-rxjs-header.component.css'
})
export class SignalsRxjsHeaderComponent {
  protected readonly basket$ = inject(SignalsRxjsService).basket$;


}
