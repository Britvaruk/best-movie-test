import {Pipe, PipeTransform} from '@angular/core';
import { GENRE_NAME } from '../constants/all';

@Pipe({
  name: 'genresList',
})
export class ConvertGenresListPipe implements PipeTransform {
  transform(list: number[]): string {
    let stringList: string[] = [];
    for (let item of list) {
      stringList.push(GENRE_NAME[item]);      
    }
    return stringList.join(', ');
  }
}