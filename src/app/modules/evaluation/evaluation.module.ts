import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { EvaluationService } from './services/evaluation.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EvaluationComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EvaluationRoutingModule,
    SharedModule
  ],
  providers: [
    EvaluationService
  ],
})
export class EvaluationModule { }
