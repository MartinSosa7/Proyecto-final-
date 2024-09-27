import { TestBed } from '@angular/core/testing';

import { ServiciosAnuncioService } from './servicios-anuncio.service';

describe('ServiciosAnuncioService', () => {
  let service: ServiciosAnuncioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosAnuncioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
