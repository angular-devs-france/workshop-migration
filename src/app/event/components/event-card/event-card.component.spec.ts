import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventCardComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.event = {
      "id": "1",
      "title": "Comment contribuer à Angular",
      "date": new Date(),
      "type": "interview",
      "imageUrl": "",
      "invitees": ["Matthieu Riegler"],
      "youtubeUrl": "https://www.youtube.com/embed/tfcsGzQmyjA?si=ZM0WnX1z_hV5Ub01&t=3164"
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
