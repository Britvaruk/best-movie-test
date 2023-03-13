import { Component, OnInit } from '@angular/core';
import { GENRE_NAME } from './core/constants/all';
import { MovieItem } from './core/interfaces/movie-item';
import { FavoriteMovieService } from './core/services/favorite-movie.service';
import { MovieListService } from './core/services/movie-list.service';

interface SelectItem {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public genres: SelectItem[] = this.getGenresSelectItems();

  public movieList: MovieItem[] = this.movieListService.movieList;

  public selectedGenreId: number = 0;

  public searchInput: string = '';  

  constructor(
    private favoriteMovieService: FavoriteMovieService,
    private movieListService: MovieListService
  ) {}

  get favoriteMovie(): MovieItem | null {
    return this.favoriteMovieService.favoriteMovie;
  }

  ngOnInit(): void {
  }

  private getGenresSelectItems(): SelectItem[] {
    let selectItemList: SelectItem[] = [];
    Object.entries(GENRE_NAME).forEach(([key, value]) => {
      selectItemList.push({
        value: +key,
        viewValue: value
      })
    })
    return selectItemList;
  }

  public applyFilter(): void {
    this.movieList = this.movieListService.movieList;

    if (this.selectedGenreId !== 0) {
      this.movieList = this.movieList.filter((item) => 
        item.genre.includes(this.selectedGenreId) && 
        (item.name).toLowerCase().includes(
          this.searchInput.toLowerCase()
        )
      );
    } else if (this.searchInput !== '') {
      this.movieList = this.movieList.filter((item) => 
        (item.name).toLowerCase().includes(
          this.searchInput.toLowerCase()
        )
      );
    }
  }
}
