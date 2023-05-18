import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: String[];
};

@Component({
  selector: 'app-average-scores',
  templateUrl: './average-scores.component.html',
  styleUrls: ['./average-scores.component.scss']
})
export class AverageScoresComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      colors: ['#ED8322'],
      series: [
        {
          name: "risk",
          data: [480, 230, 290, 325, 270, 50]
        }
      ],
      chart: {
        height: 200,
        width: 500,
        type: "line",
        toolbar: false,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
        ],
        labels: {
          style: {
            colors: ['#7C828A', '#7C828A', '#7C828A', '#7C828A', '#7C828A', '#7C828A']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#7C828A']
          }
        }
      },
    };
  }
}
