import { Injectable } from "@angular/core";
import { MovieItem } from "../interfaces/movie-item";
import movieList from '../../../../resources/data.json';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  constructor() {}

  get movieList(): MovieItem[] {
    return movieList;
  } 
}