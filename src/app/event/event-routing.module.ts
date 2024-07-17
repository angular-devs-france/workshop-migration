import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EventListComponent} from "./event-list/event-list.component";

const routes: Routes = [
  {
    path: '',
    component: EventListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class EventRoutingModule { }
