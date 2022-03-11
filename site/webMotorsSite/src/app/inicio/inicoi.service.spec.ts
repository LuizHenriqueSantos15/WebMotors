/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InicoiService } from './inicoi.service';

describe('Service: Inicoi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InicoiService]
    });
  });

  it('should ...', inject([InicoiService], (service: InicoiService) => {
    expect(service).toBeTruthy();
  }));
});
