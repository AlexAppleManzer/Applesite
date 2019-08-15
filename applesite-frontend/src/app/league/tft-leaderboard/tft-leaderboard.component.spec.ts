import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TftLeaderboardComponent } from './tft-leaderboard.component';

describe('TftLeaderboardComponent', () => {
  let component: TftLeaderboardComponent;
  let fixture: ComponentFixture<TftLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TftLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TftLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
