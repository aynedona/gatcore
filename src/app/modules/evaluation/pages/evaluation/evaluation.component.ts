import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluationService } from '../../services/evaluation.service';
import { ActivatedRoute } from '@angular/router';
import { Status } from '../../enum/status.enum';

interface DataQuestions {
  name: string,
  description: string,
  pointing: number,
  severity: string,
  status: string
}

interface Evaluation {
  id: number,
  status: Status,
  companyName: string,
  companyType: string,
  createBy: string,
  severity: string,
  createDate: string,
  dueDate: string,
  questions: Array<DataQuestions>
}

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  public params!: any;
  public formEvaluation!: FormGroup;
  public titlePage = {
    title: 'Nova Avaliação',
    icon: 'dashboards'
  }
  public displayedColumns: string[] = ['check', 'name', 'description', 'pointing', 'severity', 'status'];
  public dataSource!: Array<DataQuestions>;
  public evaluation: Evaluation | undefined;

  public selection = new SelectionModel<any>(true, []);

  constructor(
    private formBuilder: FormBuilder,
    private evaluationService: EvaluationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.params = params['evaluationId']);

    this.getEvaluations();
    this.createForm();
  }

  public getEvaluations() {
    this.evaluationService.getEvaluation().subscribe((evaluations: Array<Evaluation>) => {
      this.evaluation = evaluations[this.params - 1];
      this.formEvaluation.patchValue({
        id: this.evaluation.id,
        createdBy: this.evaluation.createBy,
        severity: this.evaluation.severity,
        createIn: this.evaluation.createDate,
        dueDate: this.evaluation.dueDate
      });
      this.dataSource = this.evaluation.questions;
    })
  }

  public createForm() {
    this.formEvaluation = this.formBuilder.group({
      id: [''],
      createdBy: [''],
      severity: [''],
      createIn: [''],
      dueDate: [''],
    })
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  public masterToggle() {
    if (this.isSomeSelected()) {
      this.selection.clear();
    } else {
      this.isAllSelected()
        ? this.selection.clear()
        : this.dataSource.forEach((row:any) => this.selection.select(row));
    }
  }

  public isSomeSelected() {
    return this.selection.selected.length > 0;
  }

}
