import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl: string = 'api/movies/movies.json';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<IMovie[]> {
    return this.http
      .get<IMovie[]>(this.moviesUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getMovie(id: string): Observable<IMovie> {
    return this.getMovies()
      .pipe(
        map((movies: IMovie[]) => movies.find(m => m.title === id)));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);
  }
}
