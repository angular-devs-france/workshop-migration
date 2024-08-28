import { TestBed } from '@angular/core/testing';
import {ActivatedRouteSnapshot} from '@angular/router';

import {EventResolver} from './event.resolver';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {CommunityEvent} from "../models/community-event.model";
import {EventService} from "../event.service";

const mockedData = {
  "id": "1",
  "title": "Comment contribuer à Angular",
  "date": new Date(),
  "type": "interview",
  "imageUrl": "",
  "invitees": ["Matthieu Riegler"],
  "youtubeUrl": "https://www.youtube.com/embed/tfcsGzQmyjA?si=ZM0WnX1z_hV5Ub01&t=3164"
};

@Injectable()
export class MockService {
  getEvent(id: string): Observable<CommunityEvent> {
    return of(mockedData);
  }
}

describe('eventResolver', () => {
  let eventResolver: EventResolver;
  let route = new ActivatedRouteSnapshot();
  let eventService: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventResolver],
      imports: [HttpClientTestingModule]
    });

    eventResolver = TestBed.inject(EventResolver);
    eventService = TestBed.inject(EventService);
  });

  it('should be created', () => {
    route.params = { id: 1 };
    const spy = spyOn(eventService, 'getEvent').and.returnValue(of(mockedData));

    eventResolver.resolve(route).subscribe(result => {
      expect(result).toEqual(mockedData);
    });

    expect(spy).toHaveBeenCalled();
  });
});
