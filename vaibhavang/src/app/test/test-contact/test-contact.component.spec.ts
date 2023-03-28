import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContactComponent } from './test-contact.component';

describe('TestContactComponent', () => {
  let component: TestContactComponent;
  let fixture: ComponentFixture<TestContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
