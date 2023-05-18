import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  colors: String[];
};

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      colors: ['#43DE97', '#ED8322', '#3996EA'],
      series: [
        {
          name: "Fornecedor 1",
          data: [20, 500, 70, 510, 700]
        },
        {
          name: "Fornecedor 2",
          data: [450, 450, 420, 50, 300]
        },
        {
          name: "Fornecedor 3",
          data: [590, 280, 260, 240, 20]
        }
      ],
      chart: {
        height: 250,
        width: 500,
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
        size: 2,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: ['#7C828A', '#7C828A', '#7C828A', '#7C828A', '#7C828A', '#7C828A']
          }
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
      yaxis: {
        labels: {
          style: {
            colors: ['#7C828A']
          }
        }
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }
}
