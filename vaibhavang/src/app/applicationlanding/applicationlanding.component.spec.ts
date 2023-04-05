import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationlandingComponent } from './applicationlanding.component';

describe('ApplicationlandingComponent', () => {
  let component: ApplicationlandingComponent;
  let fixture: ComponentFixture<ApplicationlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
