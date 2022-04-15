import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpItempageComponent } from './sp-itempage.component';

describe('SpItempageComponent', () => {
  let component: SpItempageComponent;
  let fixture: ComponentFixture<SpItempageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpItempageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpItempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
