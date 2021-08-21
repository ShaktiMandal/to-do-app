import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskitemsComponent } from './taskitems.component';

describe('TaskitemsComponent', () => {
  let component: TaskitemsComponent;
  let fixture: ComponentFixture<TaskitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
