import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private API_KEY = '266b0a3099dfe7f35e5dc21b7e502476';

  constructor(
    private http: HttpClient
  ) { }

  getCityWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},tw&appid=${this.API_KEY}`).toPromise();
  }
}
