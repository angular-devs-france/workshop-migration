import {Component, HostListener} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EventService} from "../../event.service";
import {debounceTime, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  searchControl = new FormControl('', {nonNullable: true});
  filteredEvents = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    switchMap(searchTerm => this.eventService.search(searchTerm))
  );

  constructor(
    private readonly eventService: EventService
  ) {
  }
}
