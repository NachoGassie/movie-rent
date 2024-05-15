import { Component } from '@angular/core';
import { Movie } from '../../common';
import { MovieDataService, MovieRentService } from '../../service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(
    private movieDataService: MovieDataService,
    private movieRentService: MovieRentService
  ){}

  ngOnInit(): void {
    this.movieDataService.getAllMovies()
    .subscribe(data => this.movies = data)
  }

  rentMovie(movie: Movie): void{
    this.movieRentService.addToRented(movie);
  }
}
