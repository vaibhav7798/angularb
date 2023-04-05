import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminchild2Component } from './adminchild2.component';

describe('Adminchild2Component', () => {
  let component: Adminchild2Component;
  let fixture: ComponentFixture<Adminchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adminchild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
