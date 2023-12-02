import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ab-label',
  template: `<ng-content></ng-content>`,
  imports: [CommonModule],
  standalone: true,
})
export class LabelComponent {}
