import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandaloneComponent } from './standalone.component';
import {StandaloneRoutingModule} from "./standalone-routing.module";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StandaloneComponent
  ],
  imports: [
    CommonModule,
    StandaloneRoutingModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    ReactiveFormsModule
  ]
})
export class StandaloneModule { }
