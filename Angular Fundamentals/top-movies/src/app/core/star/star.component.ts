import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mvdb-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() imdbRating: number;
  starWidth: number;

  constructor() { }

  public ngOnInit() {
    this.starWidth = this.imdbRating * 37 / 5;
  }
}
