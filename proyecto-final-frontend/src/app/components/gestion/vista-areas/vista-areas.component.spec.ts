import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAreasComponent } from './vista-areas.component';

describe('VistaAreasComponent', () => {
  let component: VistaAreasComponent;
  let fixture: ComponentFixture<VistaAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
