import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRestComponent } from './cadastro-rest.component';

describe('CadastroRestComponent', () => {
  let component: CadastroRestComponent;
  let fixture: ComponentFixture<CadastroRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
