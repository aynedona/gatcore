import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEvaluation(): Observable<any> {
    return this.httpClient.get('assets/json/evaluations.json')
  }
}
