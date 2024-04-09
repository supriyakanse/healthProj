import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAppointmentPgComponent } from './place-appointment-pg.component';

describe('PlaceAppointmentPgComponent', () => {
  let component: PlaceAppointmentPgComponent;
  let fixture: ComponentFixture<PlaceAppointmentPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceAppointmentPgComponent]
    });
    fixture = TestBed.createComponent(PlaceAppointmentPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
