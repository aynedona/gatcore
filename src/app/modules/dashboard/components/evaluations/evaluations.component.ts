import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: String[];
};

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any

  constructor () {
    this.chartOptions = {
      colors: ['#3996EA', '#8BEBF8', '#EA4949'],
      series: [20, 54, 26],
      stroke:{
        colors:['transparent']
      },
      chart: {
        type: "donut",
        width: '100%',
        height: 270
      },
      legend: {
        show: true,
        position: 'bottom',
        offsetY: 10,
        labels: {
          colors: ['#7C828A']
        }
      },
      labels: ["Completas", "Andamento", "Atrasadas"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }
}
