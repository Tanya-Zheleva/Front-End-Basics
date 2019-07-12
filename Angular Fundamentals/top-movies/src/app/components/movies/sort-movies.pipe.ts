import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';

@Pipe({
  name: 'sort'
})
export class SortMoviesPipe implements PipeTransform {
  public transform(items: IMovie[], criterias: string[]): IMovie[] {
    //const sortBy: string = criterias[0] === 'Rating' ? 'imdbRating' : criterias[0].toLowerCase();
    const sortBy: string =  criterias[0];
    const sortOrder: string = criterias[1].toLowerCase();

    const sorted: IMovie[] = items.sort((a, b) => {
      const keyA: string = Object.keys(a).find(k => k.indexOf(sortBy) !== -1);
      const keyB: string = Object.keys(a).find(k => k.indexOf(sortBy) !== -1);

      if (sortOrder === 'desc') {
        return b[keyB].toString().localeCompare(a[keyA].toString());
      }

      return a[keyA].toString().localeCompare(b[keyB].toString());
    });

    return sorted;
  }
}
