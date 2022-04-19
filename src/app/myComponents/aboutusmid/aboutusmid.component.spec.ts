import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusmidComponent } from './aboutusmid.component';

describe('AboutusmidComponent', () => {
  let component: AboutusmidComponent;
  let fixture: ComponentFixture<AboutusmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusmidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
