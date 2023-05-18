import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexLegend, ApexStroke, ApexXAxis, ApexFill, ApexTooltip } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: String[];
};

@Component({
  selector: 'app-conformity',
  templateUrl: './conformity.component.html',
  styleUrls: ['./conformity.component.scss']
})
export class ConformityComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [250, 500, 460, 300, 480]
        },
        {
          name: "Revenue",
          data: [280, 470, 320, 300, 230]
        },
      ],
      colors: ['#A83BE2', '#1371C6'],
      chart: {
        type: "bar",
        height: 200,
        width: 410,
        toolbar: false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "NIST",
          "CIS",
          "LGPD",
          "ISO",
          "BACEN"
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
      legend: {
        labels: {
          colors: ['#7C828A']
        }
      }
    };
  }
}
