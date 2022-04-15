import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProductComponent } from './sp-product.component';

describe('SpProductComponent', () => {
  let component: SpProductComponent;
  let fixture: ComponentFixture<SpProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
