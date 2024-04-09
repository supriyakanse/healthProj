import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPgComponent } from './footer-pg.component';

describe('FooterPgComponent', () => {
  let component: FooterPgComponent;
  let fixture: ComponentFixture<FooterPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPgComponent]
    });
    fixture = TestBed.createComponent(FooterPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
