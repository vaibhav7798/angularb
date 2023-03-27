import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuslandingComponent } from './aboutuslanding.component';

describe('AboutuslandingComponent', () => {
  let component: AboutuslandingComponent;
  let fixture: ComponentFixture<AboutuslandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutuslandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutuslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
