import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IMovie, IMovieDetail } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _mainUrl: string = `http://www.omdbapi.com/?apikey=afe50ae4`;

  constructor(private _httpClient: HttpClient) { }

  public getMovies(title: string): Observable<IMovie[]> {
    const titleParameter: string = `&s=${title}`;
    const fullUrl: string = `${this._mainUrl}${titleParameter}`;

    return this._httpClient
      .get<any>(fullUrl)
      .pipe(
        take(10),
        map(res => {
          return res.Search as IMovie[];
        }),
        catchError(this.handleError)
      );
  }

  public getMovie(id: string): Observable<IMovieDetail> {
    const idParameter: string = `&i=${id}`;
    const fullUrl: string = `${this._mainUrl}${idParameter}`;

    return this._httpClient
      .get<IMovieDetail>(fullUrl)
      .pipe(
        catchError(this.handleError)
      );
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
