import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-weather-illustration',
  templateUrl: './weather-illustration.component.html',
  styleUrls: ['./weather-illustration.component.scss']
})
export class WeatherIllustrationComponent implements OnInit {

  @Input() weather: string;
  @Input() temp: number;

  constructor() { }

  ngOnInit(): void {
  }

}

@Pipe({name: 'weatherImage'})
export class WeatherImagePipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);
    switch (value) {
      case 'Clouds':
        return '<i class="fas fa-cloud"></i>';
      case 'Rain':
        return '<i class="fas fa-cloud-rain"></i>';
      case 'Thunderstorm':
        return '<i class="fas fa-bolt"></i>';
      default:
        return '';
    }
  }
}
