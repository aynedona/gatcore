import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexDataLabels, ApexGrid, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: any;
  colors: any;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RiskComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Jan",
          data: [1, 2, 3, 4, 5]
        },
        {
          name: "Feb",
          data: this.generateData(5, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Mar",
          data: this.generateData(5, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Apr",
          data: this.generateData(5, {
            min: -30,
            max: 55
          })
        },
        {
          name: "May",
          data: this.generateData(5, {
            min: -30,
            max: 55
          })
        },
      ],
      chart: {
        height: 250,
        width: 420,
        type: "heatmap",
        toolbar: false
      },
      stroke:{
        colors:['#28272E99']
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 1,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 3,
                name: "low",
                color: "#5D30A5"
              },
              {
                from: 4,
                to: 43,
                name: "medium",
                color: "#F32735"
              },
              {
                from: 44,
                to: 453,
                name: "high",
                color: "#ED8322"
              },
              {
                from: 23,
                to: 654,
                name: "extreme",
                color: "#EDB729"
              },
              {
                from: 700,
                to: 2000,
                name: "full",
                color: "#6ACBD4"
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },

      xaxis: {
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
    };
  }

  ngOnInit(): void {}

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push(y);
      i++;
    }
    return series;
  }


}
