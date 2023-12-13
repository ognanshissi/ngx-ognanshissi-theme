import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { AbstractAuthService } from './abstract-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CoreAuthService implements AbstractAuthService {
  isAuthenticated = signal(false);

  login(username: string, password: string) {
    console.log({ username, password });
    return of();
  }
}
