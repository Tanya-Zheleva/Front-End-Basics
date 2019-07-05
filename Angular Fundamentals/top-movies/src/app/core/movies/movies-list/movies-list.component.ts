import { Component, OnInit } from '@angular/core';

import { IMovie } from '../../movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'mvdb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  private _listFilter: string;
  
  public pageTitle: string = 'Top 10 iMDB Movies';
  public movies: IMovie[];
  public filteredMovies: IMovie[];
  public sortOrder: string = "Asc";
  public sortType: string = "Rating";

  constructor(private movieService: MovieService) {
  }

  public get listFilter(): string {
    return this._listFilter;
  }

  public ngOnInit(): void { 
    this.movieService.getMovies()
      .subscribe(
        movies => {
          this.movies = movies;
          this.filteredMovies = this.movies;
        }
      );
  }
  
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  private performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    let filterdMovie: IMovie[] =this.movies
      .filter((m: IMovie) => m.title.toLowerCase().indexOf(filterBy) !== -1);

    return filterdMovie;
  }
}