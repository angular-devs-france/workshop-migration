import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-status',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    MatFormField,
    MatOption,
    MatSelect,
    MatLabel,
    FormsModule,
  ],
  templateUrl: './login-status.component.html',
})
export class LoginStatusComponent {
  loginStatus = 'loading';
}
