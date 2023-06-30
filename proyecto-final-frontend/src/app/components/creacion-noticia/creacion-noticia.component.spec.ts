import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionNoticiaComponent } from './creacion-noticia.component';

describe('CreacionNoticiaComponent', () => {
  let component: CreacionNoticiaComponent;
  let fixture: ComponentFixture<CreacionNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
