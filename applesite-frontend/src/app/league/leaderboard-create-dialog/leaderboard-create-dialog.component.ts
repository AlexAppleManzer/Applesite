import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leaderboard-create-dialog',
  templateUrl: './leaderboard-create-dialog.component.html',
  styleUrls: ['./leaderboard-create-dialog.component.css']
})
export class LeaderboardCreateDialogComponent {
  summoner: any = {
    name: '',
    dialog: '',
  };

  constructor(
    public dialogRef: MatDialogRef<LeaderboardCreateDialogComponent>,
    public leagueService: LeagueService) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  createSummoner(){
    this.leagueService.createSummoner(this.summoner).subscribe(
      () => this.dialogRef.close(),
      (err) => console.log(err),
    );
  }
}
