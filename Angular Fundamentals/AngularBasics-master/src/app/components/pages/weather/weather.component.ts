import { Component } from '@angular/core';
import { IWeatherData } from 'src/app/interface';

@Component({
    templateUrl: "./weather.component.html"
})
export class WeatherComponent {
    public cityWeather: IWeatherData;
}