import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { AlertComponent } from './components/alert/alert.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { ConformityComponent } from './components/conformity/conformity.component';
import { RiskComponent } from './components/risk/risk.component';
import { AverageScoresComponent } from './components/average-scores/average-scores.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { ScoreComponent } from './components/score/score.component';
import { InsightsComponent } from './components/insights/insights.component';
import { HubScoreComponent } from './components/hub-score/hub-score.component';


@NgModule({
  declarations: [
    DashboardsComponent,
    SuppliersComponent,
    AlertComponent,
    EvaluationsComponent,
    ConformityComponent,
    RiskComponent,
    AverageScoresComponent,
    PerformanceComponent,
    ScoreComponent,
    InsightsComponent,
    HubScoreComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
