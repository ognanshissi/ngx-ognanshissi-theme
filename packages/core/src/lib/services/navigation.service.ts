import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _router = inject(Router);

  constructor() {
    console.log('Navigation Service');
    this._router.events.subscribe({
      next: (response) => {
        console.log('Events => ', response.toString);
      },
    });
  }
}
