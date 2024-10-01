import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject({name: 'Obi-Wan Kenobi'});

  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user)
    );
  }
}
