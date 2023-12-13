import {
  AbstractFormFieldConfigOptions,
  ButtonModule,
  CORE_FORM_FIELD_OPTIONS,
  FormFieldModule,
  InputComponent,
} from '@ambroisebazie/core';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, InputComponent, FormFieldModule, ButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demoapp';

  constructor(@Inject(CORE_FORM_FIELD_OPTIONS) private config: AbstractFormFieldConfigOptions) {
    console.log(config);
  }
}
