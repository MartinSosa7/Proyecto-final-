import { TestBed } from '@angular/core/testing';

import { ServiciosAreaService } from './servicios-area.service';

describe('ServiciosAreaService', () => {
  let service: ServiciosAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
