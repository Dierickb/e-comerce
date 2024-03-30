import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { environmentsResolver } from './environments.resolver';

describe('environmentsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => environmentsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
