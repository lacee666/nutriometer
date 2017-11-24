import { TestBed, inject } from '@angular/core/testing';

import { FoodsearchService } from './foodsearch.service';

describe('FoodsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodsearchService]
    });
  });

  it('should be created', inject([FoodsearchService], (service: FoodsearchService) => {
    expect(service).toBeTruthy();
  }));
});
