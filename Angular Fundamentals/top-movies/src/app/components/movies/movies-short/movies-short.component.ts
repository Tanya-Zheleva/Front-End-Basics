import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: '[mvdb-movies-short]',
  templateUrl: './movies-short.component.html',
  styleUrls: ['./movies-short.component.css']
})

export class MoviesShortComponent {
  @Input()
  public movie: IMovie;
}
