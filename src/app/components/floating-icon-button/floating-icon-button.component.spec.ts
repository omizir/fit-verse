import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingIconButtonComponent } from './floating-icon-button.component';

describe('FloatingIconButtonComponent', () => {
  let component: FloatingIconButtonComponent;
  let fixture: ComponentFixture<FloatingIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingIconButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
