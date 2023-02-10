import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGlossarioComponent } from './lista-glossario.component';

describe('ListaGlossarioComponent', () => {
  let component: ListaGlossarioComponent;
  let fixture: ComponentFixture<ListaGlossarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGlossarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
