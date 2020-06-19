import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste04Component } from './teste04.component';

describe('Teste04Component', () => {
  let component: Teste04Component;
  let fixture: ComponentFixture<Teste04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
