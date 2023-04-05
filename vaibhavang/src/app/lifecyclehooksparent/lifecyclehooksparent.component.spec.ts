import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehooksparentComponent } from './lifecyclehooksparent.component';

describe('LifecyclehooksparentComponent', () => {
  let component: LifecyclehooksparentComponent;
  let fixture: ComponentFixture<LifecyclehooksparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclehooksparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclehooksparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
