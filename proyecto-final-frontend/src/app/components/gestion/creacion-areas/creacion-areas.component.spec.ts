import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionAreasComponent } from './creacion-areas.component';

describe('CreacionAreasComponent', () => {
  let component: CreacionAreasComponent;
  let fixture: ComponentFixture<CreacionAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
