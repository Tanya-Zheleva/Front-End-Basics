import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from '../../movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'mvdb-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: IMovie;
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  public ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.movieService.getMovie(id)
    .subscribe(
      movie => this.movie = movie
    );
  }

  public onBack(): void {
    this.router.navigate(['/movies']);
  }
}
