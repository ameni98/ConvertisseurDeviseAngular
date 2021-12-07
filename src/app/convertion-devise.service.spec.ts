import { TestBed } from '@angular/core/testing';

import { ConvertionDeviseService } from './convertion-devise.service';

describe('ConvertionDeviseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvertionDeviseService = TestBed.get(ConvertionDeviseService);
    expect(service).toBeTruthy();
  });
});
