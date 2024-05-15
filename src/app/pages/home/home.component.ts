import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../service/movie-data.service';
import { Movie } from '../../common/common.interface';
import { MovieRentService } from '../../service/movie-rent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

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
