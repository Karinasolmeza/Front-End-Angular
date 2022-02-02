import { TestBed } from '@angular/core/testing';

import { ContactodatosService } from './contactodatos.service';

describe('ContactodatosService', () => {
  let service: ContactodatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactodatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
