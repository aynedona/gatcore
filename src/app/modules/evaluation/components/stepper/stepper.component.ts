import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Status } from '../../enum/status.enum';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        displayDefaultIndicatorType: false
      }
    }
  ]
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  @Input() status: any;
  currentStep = 0;


  ngOnInit(): void {
    switch (this.status) {
      case 'sent':
        this.currentStep = 1;
        break;
      case 'response':
        this.currentStep = 2;
        break;
      case 'observation':
        this.currentStep = 3;
        break;
      case 'deal':
        this.currentStep = 4;
        break;
      case 'done':
        this.currentStep = 5;
        break;
    }
  }

  stepCompleted(step: number) {
    return step < this.currentStep;
  }

  getStep(step: number) {
    if(step == this.currentStep) {
      return 'av_timer';
    } else if(step < this.currentStep) {
      return 'done';
    } else {
      return '';
    }
  }
}
