// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injector, forwardRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WeatherService } from './weather.service';
import { MainComponent } from '../main/main.component';
import { AppState } from './../app.service';
import { Info } from './info';

declare var echarts;

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
  private control;
  private myChart: any;
  errorMessage: string;
  infos: Info[];


  constructor(
    private injector: Injector,
    private mainCom: MainComponent,
    private service: WeatherService,
    private route: ActivatedRoute,
    private router: Router,
    public appState: AppState
  ) {
    this.control = this.injector.get(forwardRef(() => MainComponent));
  }

  ngOnInit() {

    this.getInfos();
    this.myChart = echarts.init(document.getElementById('main'));
    this.bindChart();

  }

  private getInfos() {
    // this.service.getInfos()
    //   .subscribe(
    //   infos => this.infos = infos,
    //   error => this.errorMessage = <any>error);
  }

  private bindChart() {
    this.myChart.clear();
    this.myChart.option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Tide', 'Sunrise & SunSet']
      },
      calculable: true,
      xAxis: [
        {
          type: 'time',
          boundaryGap: false
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Sunrise & SunSet',
          type: 'line',
          lineStyle: {
            normal: {
              width: 4
            }
          },
          stack: '总量',
          smooth: true,
          symbol: 'image://../assets/img/sun.png',     // 系列级个性化拐点图形
          symbolSize: 0,
          // data: [
          //   null,
          //   30,
          //   280,
          //   {
          //     value: 560,
          //     symbolSize: 70
          //   },
          //   800,
          //   580,
          //   300,
          //   10
          // ]
          data: [['2017-06-14 04:00', null], ['2017-06-14 07:05', 0], ['2017-06-14 09:45', 2.7], { value: ['2017-06-14 11:06', 3.3], symbolSize: 70 }, ['2017-06-14 16:30', 2.4]]
        },
        {
          name: 'Tide',
          type: 'line',
          smooth: true,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: [['2017-06-14 04:00', 2.0], ['2017-06-14 07:05', 2.3], ['2017-06-14 09:45', 2.9], ['2017-06-14 11:06', 2.7], ['2017-06-14 16:30', 0.9]]
        },
      ]
    };

    this.myChart.setOption(this.myChart.option);
    window.addEventListener("resize", () => {
      this.myChart.resize();
    })

  }

}