import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeatherData } from '../interface';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class WeatherService {
    constructor(private http: HttpClient) { }

    public getCityWeather(cityId: number): Observable<IWeatherData> {
        let cityUrl: string = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=406496398945921f8d8da27d8efcb655`;

        return this.http.get<any>(cityUrl)
            .pipe(
                map(res => {
                    console.log(res);
                    const data: IWeatherData = {
                        weatherDescription: res.weather[0].description,
                        temperature: res.main.temp,
                        humidity: res.main.humidity,
                        cityName: res.name,
                        sunrise: res.sys.sunrise,
                        sunset: res.sys.sunset
                    };

                    return data;
                })
            );
    }
}
