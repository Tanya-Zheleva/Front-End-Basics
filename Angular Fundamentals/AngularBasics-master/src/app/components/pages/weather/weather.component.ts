import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWeatherData } from 'src/app/interface';
import { WeatherService } from 'src/app/services';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: "./weather.component.html"
})
export class WeatherComponent implements OnInit, OnDestroy {
    private cityIds = {
        Sofia: 727011,
        Varna: 726050,
        Burgas: 732770,
        Pleven: 728203,
        Gabrovo: 731549,
        Ruse: 727523
    }

    public cityWeather: IWeatherData;
    public city: string = "Sofia";

    private _ngUnsubcribe: Subject<void> = new Subject<void>();

    constructor(private weatherService: WeatherService) {}

    public ngOnInit(): void {
        this.weatherService.getCityWeather(this.cityIds.Sofia)
        .pipe(
            takeUntil(this._ngUnsubcribe)
        )
        .subscribe(
            weather => {
                console.log(weather);
                this.cityWeather = weather;
            }
        );
    }

    public onSelect(): void {
        const id = this.cityIds[this.city];

        this.weatherService.getCityWeather(id).pipe(
            takeUntil(this._ngUnsubcribe)
        )
            .subscribe(
                weather => {
                    console.log(weather);
                    this.cityWeather = weather;
                }
            );
    }

    public ngOnDestroy(): void {
        this._ngUnsubcribe.next();
        this._ngUnsubcribe.complete();
    }
}
