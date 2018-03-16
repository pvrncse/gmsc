import { TestBed, inject } from '@angular/core/testing';

import { NodemodulesService } from './nodemodules.service';

describe('NodemodulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodemodulesService]
    });
  });

  it('should be created', inject([NodemodulesService], (service: NodemodulesService) => {
    expect(service).toBeTruthy();
  }));
});
