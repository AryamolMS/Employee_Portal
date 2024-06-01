import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions= {};

  constructor(private api:AdminapiService){
    this.chartOptions={
      
    chart: {
      type: 'pie'
  },
  title: {
      text: ''
  },
  tooltip: {
      valueSuffix: '%'
  },

  plotOptions: {
      series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
              enabled: true,
              distance: 20
          }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
              },
              filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
              }
          }]
      }
  },
  credits:{
    enabled:false
  },
  series: [
      {
          name: 'Project',
          colorByPoint: true,
          data: [
              {
                  name: 'firefox',
                  y: 55.02
              },
              {
                  name: 'chrome',
                  sliced: true,
                  selected: true,
                  y: 26.71
              },
              {
                  name: 'safari',
                  y: 1.09
              },
              {
                  name: 'microsoft edge',
                  y: 15.5
              },
              {
                  name: 'mozilla',
                  y: 1.68
              }
          ]
      }
  ]

    }
  }

  selected: Date = new Date()
}
