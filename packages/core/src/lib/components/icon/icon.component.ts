import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { icons } from './icon.types';

@Component({
  selector: 'core-icon',
  template: `<img
    ngSrc="assets/icons/{{ name }}.svg"
    alt="{{ name }} icon"
    height="80"
    width="80"
  />`,
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class IconComponent {
  @Input() name!: icons;
}
