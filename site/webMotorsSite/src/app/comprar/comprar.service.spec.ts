/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComprarService } from './comprar.service';

describe('Service: Comprar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComprarService]
    });
  });

  it('should ...', inject([ComprarService], (service: ComprarService) => {
    expect(service).toBeTruthy();
  }));
});
