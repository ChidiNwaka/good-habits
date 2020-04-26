import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyStatusItemComponent } from './daily-status-item.component';

describe('DailyStatusItemComponent', () => {
  let component: DailyStatusItemComponent;
  let fixture: ComponentFixture<DailyStatusItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyStatusItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyStatusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
