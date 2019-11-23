import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormusiqueComponent } from './formusique.component';

describe('FormusiqueComponent', () => {
  let component: FormusiqueComponent;
  let fixture: ComponentFixture<FormusiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormusiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
