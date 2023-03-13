import { Injectable } from "@angular/core";
import { FAVORITE_MOVIE_STORAGE_KEY } from "../constants/all";
import { MovieItem } from "../interfaces/movie-item";
import { MovieListService } from "./movie-list.service";

@Injectable({
  providedIn: 'root',
})
export class FavoriteMovieService {  
  constructor(
    private movieListService: MovieListService
  ) {}

  get favoriteMovie(): MovieItem | null {
    if (this.getMovie()) {
      return this.movieListService.movieList.find((item) => 
        item.id === this.getMovie()
      ) || null;
    }
    return null;
  }

  public toggleFavoriteMovie(id: number): void {
    if (this.getMovie() !== id) {
      this.saveMovie(id);
    } else {
      this.deleteMovie();
    }   
  }

  private saveMovie(id: number): void {
    localStorage.setItem(FAVORITE_MOVIE_STORAGE_KEY, id.toString());  
  }

  private deleteMovie(): void {
    localStorage.removeItem(FAVORITE_MOVIE_STORAGE_KEY);
  }

  public getMovie(): number {
    return Number(localStorage.getItem(FAVORITE_MOVIE_STORAGE_KEY));
  }
}