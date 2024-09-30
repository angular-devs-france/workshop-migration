import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ControlFlowService {

  constructor() {
  }

  search(searchTerm: string): Observable<{ name: string }[]> {
    return of([
      {
        name: 'foo'
      }
    ]).pipe(
      map(data => data.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }
}
