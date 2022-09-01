import { InjectionToken } from '@angular/core';

export function defaultEventArgumentFactory() {
  return '$event';
}

export const IoEventArgumentToken = new InjectionToken<string>(
  'EventArgument',
  {
    providedIn: 'root',
    factory: defaultEventArgumentFactory,
  },
);

/**
 * @deprecated Since v10.4.0 - Use {@link IoEventArgumentToken} instead!
 */
export const EventArgumentToken = IoEventArgumentToken;
