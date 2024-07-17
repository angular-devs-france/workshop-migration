import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventRoutingModule} from "./event-routing.module";
import { EventListComponent } from './event-list/event-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EventItemComponent } from './event-item/event-item.component';



@NgModule({
  declarations: [
    EventListComponent,
    EventItemComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule
  ]
})
export class EventModule { }
