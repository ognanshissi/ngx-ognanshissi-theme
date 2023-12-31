import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  booleanAttribute,
  inject,
} from '@angular/core';
import { ButtonPalette } from './button.types';

// Button appearance
const BUTTON_ATTRIBUTES = [
  'core-raised-button',
  'core-outlined-button',
  'core-filled-button',
  'core-text-button',
  'core-button',
];

@Component({
  template: ``,
  standalone: true,
  host: {
    '[attr.disabled]': 'disabled || isLoading || null',
  },
})
export class ButtonBaseMixins implements OnDestroy, AfterViewInit {
  protected _elementRef = inject(ElementRef);

  protected _focusMonitor = inject(FocusMonitor);

  constructor() {
    BUTTON_ATTRIBUTES.forEach((attr) => {
      if (this._hasHostAttributes(attr)) {
        this._getHostElement()?.classList.add(`${attr.replace(/-/g, '__')}__container`);
      }
    });

    // core-button-base is used to defined default button appearance
    this._getHostElement()?.classList.add('core__button__base');
  }

  @Input() color: ButtonPalette = 'primary';

  @Input({ transform: booleanAttribute }) disabled!: boolean;

  @Input({ transform: booleanAttribute }) isLoading!: boolean;

  @Input({ transform: booleanAttribute }) rounded!: boolean;

  @Input({ transform: booleanAttribute }) iconButton!: boolean;

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  @HostBinding('class')
  get classes() {
    return {
      'core__button--primary': this.color == 'primary',
      'core__button--accent': this.color == 'accent',
      'core__button--warn': this.color == 'warn',
      'core__button--disabled': this.disabled || this.isLoading,
      'core__button--loading': this.isLoading,
      'core__button--rounded': this.rounded,
      core__button__icon: this.iconButton,
    };
  }

  ngOnDestroy() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  focus(origin?: FocusOrigin, options?: FocusOptions): void {
    if (origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
  }

  protected _getHostElement(): HTMLElement {
    return this._elementRef.nativeElement as HTMLElement;
  }

  protected _hasHostAttributes(...attributes: string[]) {
    return attributes.some((attr) => this._getHostElement()?.hasAttribute(attr));
  }
}
