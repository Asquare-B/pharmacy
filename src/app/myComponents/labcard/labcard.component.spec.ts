import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcardComponent } from './labcard.component';

describe('LabcardComponent', () => {
  let component: LabcardComponent;
  let fixture: ComponentFixture<LabcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
