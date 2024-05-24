import { Injectable } from '@angular/core';
import { Movie } from '../common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  movies: Movie[] = [
    {
      id: 1,
      title: 'Avengers',
      genre: 'accion',
      poster: 'assets/poster/avengers.jpg',
      releaseYear: 2018,
      rentPrice: 70,
      isRented: false
    },
    {
      id: 2,
      title: 'Harry Potter',
      genre: 'accion',
      poster: 'assets/poster/harry_potter.jpg',
      releaseYear: 2018,
      rentPrice: 80,
      isRented: false
    },
    {
      id: 3,
      title: 'El señor de los anillos',
      genre: 'accion',
      poster: 'assets/poster/señor_anillos.jpg',
      releaseYear: 2018,
      rentPrice: 50,
      isRented: false
    },
  ];

  getAllMovies(): Observable<Movie[]>{
    return of(this.movies);
  }
}
