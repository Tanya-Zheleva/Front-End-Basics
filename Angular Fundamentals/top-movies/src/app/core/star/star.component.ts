import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mvdb-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() public imdbRating: number;
  public starWidth: number;

  constructor() { }

  public ngOnInit(): void {
    this.starWidth = this.imdbRating * 37 / 5;
  }
}
