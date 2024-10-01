import { Component } from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";

@Component({
  selector: 'app-login-status',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './login-status.component.html'
})
export class LoginStatusComponent {
  loginStatus: string = 'loading';
}
