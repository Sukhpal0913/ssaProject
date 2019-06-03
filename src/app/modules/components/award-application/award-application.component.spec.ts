import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardApplicationComponent } from './award-application.component';

describe('AwardApplicationComponent', () => {
  let component: AwardApplicationComponent;
  let fixture: ComponentFixture<AwardApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
