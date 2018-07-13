import { TestBed, inject } from '@angular/core/testing';

import { BnkService } from './bnk.service';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';

describe('BnkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnkService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([BnkService], (service: BnkService) => {
    expect(service).toBeTruthy();
  }));
});
