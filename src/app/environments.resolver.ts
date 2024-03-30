import { ResolveFn } from '@angular/router';

export const environmentsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
