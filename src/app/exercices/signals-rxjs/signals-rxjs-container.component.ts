import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SignalsRxjsHeaderComponent} from "./components/signals-rxjs-header/signals-rxjs-header.component";

@Component({
  selector: 'app-signals-rxjs-container',
  standalone: true,
  imports: [
    RouterOutlet,
    SignalsRxjsHeaderComponent
  ],
  templateUrl: './signals-rxjs-container.component.html',
  styleUrl: './signals-rxjs-container.component.css'
})
export class SignalsRxjsContainerComponent {

}
