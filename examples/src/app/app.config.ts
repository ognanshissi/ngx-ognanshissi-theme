import { AbstractFormFieldConfigOptions, CORE_FORM_FIELD_OPTIONS } from '@ambroisebazie/core';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

const fieldOptions: AbstractFormFieldConfigOptions = {
  appearance: 'fill',
};

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: CORE_FORM_FIELD_OPTIONS,
      useValue: fieldOptions,
    },
    provideClientHydration(),

    provideRouter(appRoutes),
  ],
};
