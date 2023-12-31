import { Component } from '@angular/core';

@Component({
  selector: 'core-hint',
  template: `<span [attr.role]="'hint'" class="block text-[9px] font-mono text-gray-700">
    <ng-content></ng-content>
  </span>`,
})
export class FormHintComponent {}
