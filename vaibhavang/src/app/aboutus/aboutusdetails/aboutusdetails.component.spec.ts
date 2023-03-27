import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusdetailsComponent } from './aboutusdetails.component';

describe('AboutusdetailsComponent', () => {
  let component: AboutusdetailsComponent;
  let fixture: ComponentFixture<AboutusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
