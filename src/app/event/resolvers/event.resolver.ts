import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {catchError, EMPTY, Observable} from 'rxjs';
import {CommunityEvent} from "../models/community-event.model";
import {HttpErrorResponse} from "@angular/common/http";
import {EventService} from "../event.service";

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<Observable<CommunityEvent>> {
  constructor(
    private service: EventService,
    private router: Router
  ) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<CommunityEvent> {
    return this.service.getEvent(route.paramMap.get('id')!).pipe(
      catchError(err => {
        if(err instanceof HttpErrorResponse) {
          void this.router.navigate(['/not-found']);
        }
        return EMPTY;
      })
    )
  }
}
