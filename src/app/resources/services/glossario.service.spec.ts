import { TestBed } from '@angular/core/testing';

import { GlossarioService } from './glossario.service';

describe('GlossarioService', () => {
  let service: GlossarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlossarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
