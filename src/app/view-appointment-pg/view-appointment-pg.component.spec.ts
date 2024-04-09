import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentPgComponent } from './view-appointment-pg.component';

describe('ViewAppointmentPgComponent', () => {
  let component: ViewAppointmentPgComponent;
  let fixture: ComponentFixture<ViewAppointmentPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAppointmentPgComponent]
    });
    fixture = TestBed.createComponent(ViewAppointmentPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
