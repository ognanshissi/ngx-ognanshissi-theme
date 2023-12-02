import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AB_FORM_FIELD_OPTIONS, AbstractFormFieldConfigOptions } from '@ambroisebazie/core';

const fieldOptions: AbstractFormFieldConfigOptions = {
  appearance: 'fill'
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: AB_FORM_FIELD_OPTIONS,
      useExisting: fieldOptions
    },
    provideClientHydration(), provideRouter(appRoutes)
  ],
};
