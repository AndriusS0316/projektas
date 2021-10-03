import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzduotysComponent } from './uzduotys.component';

describe('UzduotysComponent', () => {
  let component: UzduotysComponent;
  let fixture: ComponentFixture<UzduotysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UzduotysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UzduotysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
