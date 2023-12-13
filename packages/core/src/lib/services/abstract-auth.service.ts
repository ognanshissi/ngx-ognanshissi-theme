import { WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AbstractAuthService<T = unknown> {
  isAuthenticated!: WritableSignal<boolean>;

  login!: (username: string, password: string) => Observable<T>;
}
