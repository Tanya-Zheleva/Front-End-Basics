import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mvdb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit, OnDestroy {
  public pageTitle: string = 'Top 10 iMDB Movies';
  public movies: IMovie[];
  public filteredMovies: IMovie[];
  public sortOrder: string = "Asc";
  public sortType: string = "Title";
  public filter: string = 'Fight';

  private _ngUnsubcribe: Subject<void> = new Subject<void>();

  constructor(private _movieService: MovieService) { }

  public ngOnInit(): void {
    this.getMovies();
  }

  public onSearch(): void {
    this.getMovies();
  }

  public ngOnDestroy(): void {
    this._ngUnsubcribe.next();
    this._ngUnsubcribe.complete();
  }

  private getMovies(): void {
    this._movieService
      .getMovies(this.filter)
      .pipe(
        takeUntil(this._ngUnsubcribe)
      )
      .subscribe((movies: IMovie[]) => this.movies = movies);
  }
}
