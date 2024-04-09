import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePgComponent } from './welcome-pg.component';

describe('WelcomePgComponent', () => {
  let component: WelcomePgComponent;
  let fixture: ComponentFixture<WelcomePgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePgComponent]
    });
    fixture = TestBed.createComponent(WelcomePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
