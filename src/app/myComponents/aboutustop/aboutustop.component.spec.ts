import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutustopComponent } from './aboutustop.component';

describe('AboutustopComponent', () => {
  let component: AboutustopComponent;
  let fixture: ComponentFixture<AboutustopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutustopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutustopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
