import { ButtonModule, FormFieldModule, InputComponent } from '@ambroisebazie/core';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from 'packages/core/src/lib/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    InputComponent,
    FormFieldModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    IconComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demoapp';

  username = 'Ambroise BAZIE';

  lastName = 'Hello world';

  form: FormGroup = new FormGroup({
    firstName: new FormControl('Ambroise', [Validators.required]),
    lastName: new FormControl('BAZIE'),
  });

  submitForm() {
    console.log(this.form.value);
  }
}
