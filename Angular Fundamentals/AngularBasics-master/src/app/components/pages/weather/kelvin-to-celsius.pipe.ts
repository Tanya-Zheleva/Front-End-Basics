import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(kelvin: number): string {
    return `${(kelvin - 273.15).toFixed(2)} \u2103`;
  }
}
