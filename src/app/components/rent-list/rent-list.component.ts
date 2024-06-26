import { Component } from '@angular/core';
import { MovieRentService } from '../../service';
import { Movie } from '../../common';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrl: './rent-list.component.scss'
})
export class RentListComponent {

  rentedMovies: Movie[] = [];

  constructor(
    private movieRentService: MovieRentService,
  ){
    this.movieRentService.movies
    .subscribe(data => this.rentedMovies = data)
  }

  removeFromRent(movie: Movie): void{
    this.movieRentService.removeFromRented(movie);
  }
}
