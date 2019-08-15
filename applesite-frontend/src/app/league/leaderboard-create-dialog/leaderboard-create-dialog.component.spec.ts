import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardCreateDialogComponent } from './leaderboard-create-dialog.component';

describe('LeaderboardCreateDialogComponent', () => {
  let component: LeaderboardCreateDialogComponent;
  let fixture: ComponentFixture<LeaderboardCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
