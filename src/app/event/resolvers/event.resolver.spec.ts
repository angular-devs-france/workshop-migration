import { TestBed } from '@angular/core/testing';
import {ActivatedRouteSnapshot} from '@angular/router';

import {EventResolver} from './event.resolver';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {CommunityEvent} from "../models/community-event.model";

@Injectable()
export class MockService {
  getEvent(id: string): Observable<CommunityEvent> {
    return of({ id: 1, name: 'test' });
  }
}

describe('eventResolver', () => {
  let eventResolver: EventResolver;
  let route = new ActivatedRouteSnapshot();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventResolver,
        provideHttpClientTesting(),
      ]
    });

    eventResolver = TestBed.inject(EventResolver);
  });

  it('should be created', () => {
    route.params = { id: 1 };

    eventResolver.resolve()
  });
});
