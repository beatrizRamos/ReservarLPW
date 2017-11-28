import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserRestComponent } from './reser-rest.component';

describe('ReserRestComponent', () => {
  let component: ReserRestComponent;
  let fixture: ComponentFixture<ReserRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
