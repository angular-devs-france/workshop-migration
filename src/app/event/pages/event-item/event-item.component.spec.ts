import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItemComponent } from './event-item.component';
import {provideRouter} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventItemComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventItemComponent);
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
