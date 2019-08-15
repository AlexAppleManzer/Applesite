import { Component, OnInit } from '@angular/core';
import { LeaderboardCreateDialogComponent } from '../leaderboard-create-dialog/leaderboard-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leaderboard-overview',
  templateUrl: './leaderboard-overview.component.html',
  styleUrls: ['./leaderboard-overview.component.css']
})
export class LeaderboardOverviewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateDialog(){
    const dialogRef = this.dialog.open(LeaderboardCreateDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(() => {}, () => {}, () => {});
  }
}
