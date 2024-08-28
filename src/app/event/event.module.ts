import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {EventRoutingModule} from "./event-routing.module";
import { EventListComponent } from './pages/event-list/event-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EventItemComponent } from './pages/event-item/event-item.component';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventItemComponent,
    EventCardComponent,
  ],
    imports: [
        CommonModule,
        EventRoutingModule,
        ReactiveFormsModule,
        NgOptimizedImage
    ]
})
export class EventModule { }
