import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCarditemComponent } from './sp-carditem.component';

describe('SpCarditemComponent', () => {
  let component: SpCarditemComponent;
  let fixture: ComponentFixture<SpCarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCarditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
