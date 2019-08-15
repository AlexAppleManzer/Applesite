import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { merge, of } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LeaderboardActionsDialogComponent } from '../leaderboard-actions-dialog/leaderboard-actions-dialog.component';

@Component({
  selector: 'app-solo-q-leaderboard',
  templateUrl: './solo-q-leaderboard.component.html',
  styleUrls: ['./solo-q-leaderboard.component.css']
})
export class SoloQLeaderboardComponent implements AfterViewInit {
  summoners : any[] = [];
  displayedColumns: string[] = ['alias', 'name', 'rank', 'actions'];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  err: string;
  
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(public dialog: MatDialog, private leagueService: LeagueService) { }

  ngAfterViewInit() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.leagueService.querySummoners({'sortBySoloQ': '-1', page: this.paginator.pageIndex, limit: this.paginator.pageSize});
            // this.sort.active, this.sort.direction, this.paginator.pageIndex;
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      ).subscribe(data => this.summoners = data);
  }

  openActionsDialog(summoner: any): void {
    const dialogRef = this.dialog.open(LeaderboardActionsDialogComponent, {
      width: '350px',
      data: {_id: summoner._id, alias: summoner.alias, name: summoner.name}
    });

    dialogRef.afterClosed().subscribe(() => {}, () => {}, () => {this.ngAfterViewInit()});
  }
}
