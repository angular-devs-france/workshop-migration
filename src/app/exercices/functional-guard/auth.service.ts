import {Injectable} from "@angular/core";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<{ name: string } | null>({name: 'Obi-Wan Kenobi'});

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user)
  );

  login() {
    this.user$.next({name: 'Obi-Wan Kenobi'});
  }

  logout() {
    this.user$.next(null);
  }
}
