import { TestBed } from '@angular/core/testing';

import { StageOfferService } from './stage-offer.service';

describe('StageOfferService', () => {
  let service: StageOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
