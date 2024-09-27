import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionRolesComponent } from './creacion-roles.component';

describe('CreacionRolesComponent', () => {
  let component: CreacionRolesComponent;
  let fixture: ComponentFixture<CreacionRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
