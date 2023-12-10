import { AB_FORM_FIELD_OPTIONS, AbstractFormFieldConfigOptions } from '@ambroisebazie/core';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

const fieldOptions: AbstractFormFieldConfigOptions = {
  appearance: 'outline',
};

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: AB_FORM_FIELD_OPTIONS,
      useValue: fieldOptions,
    },
    provideClientHydration(),
    provideRouter(appRoutes),
  ],
};
