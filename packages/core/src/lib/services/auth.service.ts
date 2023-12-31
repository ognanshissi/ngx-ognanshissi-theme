import { Injectable, computed, signal } from '@angular/core';
import { of } from 'rxjs';
import { AbstractAuthService } from './abstract-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CoreAuthService implements AbstractAuthService {
  private readonly _isAuthenticated = signal(false);

  public isAuthenticated = computed(() => this._isAuthenticated());

  login(username: string, password: string) {
    console.log({ username, password });
    return of();
  }
}
