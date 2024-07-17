import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EventService} from "../event.service";
import {debounceTime, Observable, switchMap} from "rxjs";
import {CommunityEvent} from "../models/community-event.model";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  searchControl = new FormControl('', {nonNullable: true});
  filteredEvents: Observable<CommunityEvent[]> = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    switchMap(searchTerm => this.eventService.search(searchTerm))
  )

  constructor(private readonly eventService: EventService) {
  }
}
