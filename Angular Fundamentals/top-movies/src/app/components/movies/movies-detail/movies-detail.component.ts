import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieDetail } from '../../../interfaces/movie.interface';
import { MovieService } from '../../../services/movie.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mvdb-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit, OnDestroy {
  public movie: IMovieDetail;

  private _ngUnsubcribe: Subject<void> = new Subject<void>();

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService) { }

  public ngOnInit(): void {
    const id: string = this._activatedRoute.snapshot.paramMap.get('id');

    this._movieService
      .getMovie(id)
      .pipe(
        takeUntil(this._ngUnsubcribe)
      )
      .subscribe((movie: IMovieDetail) => this.movie = movie);
  }

  public onBack(): void {
    this._router.navigate(['movies']);
  }

  public ngOnDestroy(): void {
    this._ngUnsubcribe.next();
    this._ngUnsubcribe.complete();
  }
}
