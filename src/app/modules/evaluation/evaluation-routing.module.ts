import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':evaluationId',
        component: EvaluationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
