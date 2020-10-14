import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTitelComponent } from './sub-titel.component';

describe('SubTitelComponent', () => {
  let component: SubTitelComponent;
  let fixture: ComponentFixture<SubTitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTitelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
