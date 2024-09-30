import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {StandaloneComponent} from "./standalone.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: StandaloneComponent},
    ])
  ],
  exports: [RouterModule]
})
export class StandaloneRoutingModule { }
