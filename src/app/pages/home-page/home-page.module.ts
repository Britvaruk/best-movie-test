import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { HomePageComponent } from './home-page.component';
import { ConvertGenresListPipe } from 'src/app/core/pipes/convert-genres-list.pipe';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { MovieCardModalComponent } from 'src/app/components/movie-card-modal/movie-card-modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    ConvertGenresListPipe,
    MovieCardComponent,
    MovieCardModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class HomePageModule { }