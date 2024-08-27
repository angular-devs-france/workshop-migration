import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import {HttpClientTestingModule, provideHttpClientTesting} from "@angular/common/http/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {EventService} from "../../event.service";
import {of} from "rxjs";

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let eventService: EventService;

  // TODO voir pour lancement en headless
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventListComponent], // TODO ajouter EventCard et tester sa présence
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      // providers: [provideHttpClientTesting()] // TODO why it does not work?
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    eventService = TestBed.inject(EventService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const spy = spyOn(eventService, 'search').and.returnValue(of([
      {
        "id": "1",
        "title": "Comment contribuer à Angular",
        "date": new Date(),
        "type": "interview",
        "imageUrl": "",
        "invitees": ["Matthieu Riegler"],
        "youtubeUrl": "https://www.youtube.com/embed/tfcsGzQmyjA?si=ZM0WnX1z_hV5Ub01&t=3164"
      },
    ]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
