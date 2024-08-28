import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import {HttpClientTestingModule, provideHttpClientTesting} from "@angular/common/http/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {EventService} from "../../event.service";
import {of} from "rxjs";
import {EventCardComponent} from "../../components/event-card/event-card.component";

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let eventService: EventService;

  // TODO voir pour lancement en headless
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventListComponent, EventCardComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    eventService = TestBed.inject(EventService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
