// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../common/common.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  movies: Movie[] = [
    {
      id: 1,
      title: 'avengers',
      genre: 'accion',
      poster: 'assets/poster/avengers.jpg',
      releaseYear: 2018,
      rentPrice: 50,
      isRented: false
    }
  ]

  // constructor(
  //   private http: HttpClient
  // ){}

  getAllMovies(): Observable<Movie[]>{
    return of(this.movies);
  }
}
