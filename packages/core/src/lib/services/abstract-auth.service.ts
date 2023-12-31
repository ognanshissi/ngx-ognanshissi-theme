import { Signal } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AbstractAuthService<T = unknown> {
  isAuthenticated!: Signal<boolean>;

  login!: (username: string, password: string) => Observable<T>;

  // resetPassword<TObject>: () => Observable<TObject>;
}
