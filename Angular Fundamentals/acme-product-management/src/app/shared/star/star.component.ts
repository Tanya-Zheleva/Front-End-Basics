import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  constructor() { }

  public ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  public onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
  }
}
