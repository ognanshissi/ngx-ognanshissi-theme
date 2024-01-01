import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-hint',
  template: `<span class="block text-[9px] font-mono text-gray-700" [attr.aria-label]="ariaLabel">
    <ng-content></ng-content>
  </span>`,
})
export class FormHintComponent {
  @Input() ariaLabel!: string;
}
