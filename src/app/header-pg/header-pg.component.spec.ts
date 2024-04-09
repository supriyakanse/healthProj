import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPgComponent } from './header-pg.component';

describe('HeaderPgComponent', () => {
  let component: HeaderPgComponent;
  let fixture: ComponentFixture<HeaderPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPgComponent]
    });
    fixture = TestBed.createComponent(HeaderPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
