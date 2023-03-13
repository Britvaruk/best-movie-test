import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieItem } from 'src/app/core/interfaces/movie-item';
import { FavoriteMovieService } from 'src/app/core/services/favorite-movie.service';
import { MovieCardModalComponent } from '../movie-card-modal/movie-card-modal.component';

@Component({
  selector: 'app-movie-card[movie]',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: MovieItem;

  constructor(
    private favoriteMovieService: FavoriteMovieService,
    private dialog: MatDialog
  ) {}

  get favoriteMovieId(): number | null {
    return this.favoriteMovieService.getMovie();
  }

  public toggleFavoriteMovie(event: Event, id: number): void {
    event.stopPropagation();
    this.favoriteMovieService.toggleFavoriteMovie(id);
  }

  public openCardModal(): void {
    this.dialog.open(MovieCardModalComponent, {
      data: this.movie,
      panelClass: 'custom-modalbox'
    });
  }
}
