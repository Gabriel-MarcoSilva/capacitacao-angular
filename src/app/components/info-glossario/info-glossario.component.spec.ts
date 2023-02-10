import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGlossarioComponent } from './info-glossario.component';

describe('InfoGlossarioComponent', () => {
  let component: InfoGlossarioComponent;
  let fixture: ComponentFixture<InfoGlossarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGlossarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
