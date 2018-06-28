import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestDashboardComponent } from './quest-dashboard.component';

describe('QuestDashboardComponent', () => {
  let component: QuestDashboardComponent;
  let fixture: ComponentFixture<QuestDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
