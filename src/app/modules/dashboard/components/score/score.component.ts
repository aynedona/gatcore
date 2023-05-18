import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Session Duration",
          data: [20, 500, 70, 510, 700]
        },
        {
          name: "Page Views",
          data: [450, 450, 420, 50, 300]
        },
        {
          name: "Total Visits",
          data: [590, 280, 260, 240, 20]
        }
      ],
      chart: {
        height: 250,
        width: 300,
        type: "line",
        toolbar: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
      },
      legend: {
        show: false
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "JAN",
          "FEV",
          "MAR",
          "ABR",
          "MAI",
          "JUN",
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }
}
