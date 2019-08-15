import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardActionsDialogComponent } from './leaderboard-actions-dialog.component';

describe('LeaderboardActionsDialogComponent', () => {
  let component: LeaderboardActionsDialogComponent;
  let fixture: ComponentFixture<LeaderboardActionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardActionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardActionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
