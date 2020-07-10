import { Component, OnInit } from '@angular/core';
import { WeatherService } from './core/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading: boolean;
  cityList: string[] = ['Taipei', 'Yilan', 'Taoyuan', 'Hsinchu', 'Miaoli', 'Taichung', 'Changhua', 'Nantou', 'Yunlin', 'Chiayi', 'Tainan', 'Kaohsiung'];
  curCity: string | null;
  weather: WeatherRec;
  time: string;
  showMore: boolean | null;

  constructor(
    private weatherSrv: WeatherService
  ) {}

  ngOnInit(): void {
    this.time = moment().format('YYYY-MM-DD h:mm:ss');
  }

  async setCurCity(city: string) {
    this.isLoading = true;

    this.curCity = city;
    const rsp = await this.weatherSrv.getCityWeather(city);
    this.weather = rsp as WeatherRec;

    this.time = moment().format('YYYY-MM-DD h:mm:ss');

    this.isLoading = false;
  }
}

interface WeatherRec {
  /** 座標：經緯度 */
  coord: {
    lon: string,
    lat: string
  };
  /** 天氣 */
  weather: {
    main: string,
    description: string
  }[];
  /** 溫度、體感、大氣壓、濕度 */
  main: {
    temp: number,
    feels_like: string,
    temp_min: string,
    temp_max: string,
    presure: string;
    humidity: string;
  };
  dt: number;
  timezone: number;
}

