import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-leaderboard-actions-dialog',
  templateUrl: './leaderboard-actions-dialog.component.html',
  styleUrls: ['./leaderboard-actions-dialog.component.css']
})
export class LeaderboardActionsDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<LeaderboardActionsDialogComponent>,
    public leagueService: LeagueService,
    @Inject(MAT_DIALOG_DATA) public summoner: any) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

  updateSummoner(summoner: any) {
    console.log("update " + summoner._id + " " + JSON.stringify(summoner));
    this.leagueService.updateSummoner(summoner._id, summoner).subscribe(
      () => this.dialogRef.close(),
      (err) => console.log(err),
    );
  }

  deleteSummoner(summoner: any) {
    console.log("delete " + JSON.stringify(summoner));
    this.leagueService.deleteSummoner(summoner._id).subscribe(
      () => this.dialogRef.close(),
      (err) => console.log(err),
    );
  }
}
