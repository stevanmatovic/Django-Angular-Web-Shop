import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityFormComponent } from './quantity-form.component';

describe('QuantityFormComponent', () => {
  let component: QuantityFormComponent;
  let fixture: ComponentFixture<QuantityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
