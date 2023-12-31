import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnDestroy,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonBaseMixins } from './button-mixin';

@Component({
  selector:
    'button[core-raised-button], button[core-filled-button], button[core-outlined-button], button[core-text-button], button[core-button]',
  templateUrl: './button.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./button.scss'],
  exportAs: 'CoreButton',
})
export class Button extends ButtonBaseMixins {}

@Component({
  selector:
    'a[core-raised-button], a[core-filled-button], a[core-outlined-button], a[core-text-button], a[core-button]',
  templateUrl: './button.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./button.scss'],
  exportAs: 'CoreAnchor',
})
export class Anchor extends Button implements AfterViewInit, OnDestroy {
  constructor(@Optional() private _ngZone?: NgZone) {
    super();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    /** @breaking-change 14.0.0 _ngZone will be required. */
    if (this._ngZone) {
      this._ngZone.runOutsideAngular(() => {
        this._elementRef.nativeElement.addEventListener('click', this._haltDisabledEvents);
      });
    } else {
      this._elementRef.nativeElement.addEventListener('click', this._haltDisabledEvents);
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this._elementRef.nativeElement.removeEventListener('click', this._haltDisabledEvents);
  }

  _haltDisabledEvents = (event: Event): void => {
    // A disabled button shouldn't apply any actions
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
}
