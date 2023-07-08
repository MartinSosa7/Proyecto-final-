import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormularioComponent } from './new-formulario.component';

describe('NewFormularioComponent', () => {
  let component: NewFormularioComponent;
  let fixture: ComponentFixture<NewFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
