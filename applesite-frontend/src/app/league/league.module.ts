import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TftLeaderboardComponent } from './tft-leaderboard/tft-leaderboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaderboardOverviewComponent } from './leaderboard-overview/leaderboard-overview.component';
import { LeaderboardActionsDialogComponent } from './leaderboard-actions-dialog/leaderboard-actions-dialog.component';
import { LeaderboardCreateDialogComponent } from './leaderboard-create-dialog/leaderboard-create-dialog.component';
import { SoloQLeaderboardComponent } from './solo-q-leaderboard/solo-q-leaderboard.component';

const routes: Routes = [
  { path: '', component: LeaderboardOverviewComponent},
];

@NgModule({
  declarations: [TftLeaderboardComponent, LeaderboardOverviewComponent, LeaderboardActionsDialogComponent, LeaderboardCreateDialogComponent, SoloQLeaderboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [LeaderboardActionsDialogComponent, LeaderboardCreateDialogComponent],
  exports: [RouterModule],
})
export class LeagueModule { }
