import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from './movie';

@Pipe({
  name: 'sort'
})
export class SortMoviesPipe implements PipeTransform {
  public transform(items: IMovie[], criterias: string[]): IMovie[] {    
    let sortBy = criterias[0] == 'Rating' ? 'imdbRating' : criterias[0].toLowerCase();  
    let sortOrder = criterias[1].toLowerCase();
    
    let sorted = items.sort((a, b) => {  
      let keyA = Object.keys(a).find(k => k.indexOf(sortBy) !== -1);
      let keyB = Object.keys(a).find(k => k.indexOf(sortBy) !== -1);
      
      if (sortOrder === 'desc') {
        return b[keyB].toString().localeCompare(a[keyA].toString());
      }

      return a[keyA].toString().localeCompare(b[keyB].toString());
    });
    
    return sorted;
  }
}
