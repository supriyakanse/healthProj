import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPgComponent } from './query-pg.component';

describe('QueryPgComponent', () => {
  let component: QueryPgComponent;
  let fixture: ComponentFixture<QueryPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryPgComponent]
    });
    fixture = TestBed.createComponent(QueryPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
