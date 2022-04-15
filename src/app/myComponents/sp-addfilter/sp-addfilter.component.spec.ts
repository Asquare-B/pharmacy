import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAddfilterComponent } from './sp-addfilter.component';

describe('SpAddfilterComponent', () => {
  let component: SpAddfilterComponent;
  let fixture: ComponentFixture<SpAddfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpAddfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpAddfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
