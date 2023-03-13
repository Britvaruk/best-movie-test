import { Component, OnInit } from '@angular/core';
import { GENRE_NAME } from 'src/app/core/constants/all';
import { MovieItem } from 'src/app/core/interfaces/movie-item';
import { SelectItem } from 'src/app/core/interfaces/select-item';
import { FavoriteMovieService } from 'src/app/core/services/favorite-movie.service';
import { MovieListService } from 'src/app/core/services/movie-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public genresList: SelectItem[] = this.getGenresSelectList();

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

  private getGenresSelectList(): SelectItem[] {
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
