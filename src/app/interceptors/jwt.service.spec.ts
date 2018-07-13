import { TestBed, inject } from '@angular/core/testing';

import { JwtService } from './jwt.service';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';

describe('JwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([JwtService], (service: JwtService) => {
    expect(service).toBeTruthy();
  }));
});
