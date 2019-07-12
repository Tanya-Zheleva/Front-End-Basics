import { NgModule } from '@angular/core';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesShortComponent } from './movies-short/movies-short.component';
import { SharedModule } from '../shared/shared.module';
import { SortMoviesPipe } from './sort-movies.pipe';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesShortComponent,
    SortMoviesPipe
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    SortMoviesPipe
  ]
})

export class MoviesModule { }
