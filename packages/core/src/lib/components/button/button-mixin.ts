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

const BUTTON_ATTRIBUTES = ['raised-button', 'outlined-button', 'filled-button', 'text-button'];

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
        this._getHostElement()?.classList.add(`ab-${attr}-container`);
      }
    });

    this._getHostElement()?.classList.add('ab-button-base');
  }

  @Input() color: ButtonPalette = 'primary';

  @Input({ transform: booleanAttribute }) disabled!: boolean;

  @Input({ transform: booleanAttribute }) isLoading!: boolean;

  @Input({ transform: booleanAttribute }) rounded!: boolean;

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  @HostBinding('class')
  get classes() {
    return {
      'ab-button-primary': this.color == 'primary',
      'ab-button-accent': this.color == 'accent',
      'ab-button-warn': this.color == 'warn',
      'ab-button--disabled': this.disabled || this.isLoading,
      'ab-button--loading': this.isLoading,
      'ab-button--rounded': this.rounded,
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
