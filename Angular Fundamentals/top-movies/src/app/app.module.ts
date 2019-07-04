import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './core/movies/movies-list/movies-list.component';
import { StarComponent } from './core/star/star.component';
import { SortMoviesPipe } from './core/sort-movies.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    StarComponent,
    SortMoviesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
