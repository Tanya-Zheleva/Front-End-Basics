import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../movie';

@Component({
  selector: '[mvdb-movies-short]',
  templateUrl: './movies-short.component.html',
  styleUrls: ['./movies-short.component.css']
})
export class MoviesShortComponent implements OnInit {
  @Input() public movie: IMovie;

  constructor() { }

  public ngOnInit(): void {
  }
}
