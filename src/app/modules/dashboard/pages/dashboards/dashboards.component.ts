import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { SuppliersComponent } from '../../components/suppliers/suppliers.component';
import { ConformityComponent } from '../../components/conformity/conformity.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { ScoreComponent } from '../../components/score/score.component';
import { AverageScoresComponent } from '../../components/average-scores/average-scores.component';
import { RiskComponent } from '../../components/risk/risk.component';
import { HubScoreComponent } from '../../components/hub-score/hub-score.component';
import { EvaluationsComponent } from '../../components/evaluations/evaluations.component';
import { InsightsComponent } from '../../components/insights/insights.component';
import { PerformanceComponent } from '../../components/performance/performance.component';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent {
  public titlePage = {
    title: 'Resumo do Seu Ambiente',
    icon: 'dashboards'
  }

  componentes: any[] = [
    'app-suppliers',
    'app-conformity',
    'app-averageScores',
    'app-score',
    'app-alert',
    'app-risk',
    'app-performance',
    'app-insights',
    'app-evaluations',
    'app-hubScore',];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
