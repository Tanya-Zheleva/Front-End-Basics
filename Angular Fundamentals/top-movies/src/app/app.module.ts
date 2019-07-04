import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './core/movies/movies-list/movies-list.component';
import { StarComponent } from './core/star/star.component';
import { SortMoviesPipe } from './core/sort-movies.pipe';
import { MoviesDetailComponent } from './core/movies/movies-detail/movies-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    StarComponent,
    SortMoviesPipe,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'movies', component: MoviesListComponent },
      { path: 'movies/:id', component: MoviesDetailComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: '**', redirectTo: 'movies', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
