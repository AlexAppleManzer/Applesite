import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloQLeaderboardComponent } from './solo-q-leaderboard.component';

describe('SoloQLeaderboardComponent', () => {
  let component: SoloQLeaderboardComponent;
  let fixture: ComponentFixture<SoloQLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloQLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloQLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
