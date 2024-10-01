import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html'
})
export class StandaloneComponent {
  form = new FormGroup({
    version: new FormControl(''),
    review: new FormControl(''),
  })
}
