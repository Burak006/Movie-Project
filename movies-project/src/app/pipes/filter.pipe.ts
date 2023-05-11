import { MoviesModul } from '../models/movies.module';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieSearch'
})
export class FilterPipe implements PipeTransform {

  transform(value: MoviesModul[], filterText: string): MoviesModul[] {
    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:MoviesModul)=>p.name.toLocaleLowerCase().indexOf(filterText)!=-1):value
  }
  
// :value eğer yoksa kendi değerini döndür
}
