import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHComponent } from './product-h.component';

describe('ProductHComponent', () => {
  let component: ProductHComponent;
  let fixture: ComponentFixture<ProductHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
