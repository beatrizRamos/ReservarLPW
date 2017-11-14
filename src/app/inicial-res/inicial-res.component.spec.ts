import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialResComponent } from './inicial-res.component';

describe('InicialResComponent', () => {
  let component: InicialResComponent;
  let fixture: ComponentFixture<InicialResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
