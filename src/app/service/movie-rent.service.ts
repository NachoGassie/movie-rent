import { Injectable } from '@angular/core';
import { Movie } from '../common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieRentService {
  
  private _movies: Movie[] = [];
  private _moviesSubject = new BehaviorSubject<Movie[]>(this._movies);
  movies = this._moviesSubject.asObservable();

  addToRented(movie: Movie): void{
    this._movies.push(movie);
    movie.isRented = true;

    this._moviesSubject.next(this._movies);
  }

  removeFromRented(movie: Movie): void{
    this._movies  = this._movies.filter(m => m.id !== movie.id);
    movie.isRented = false;
    this._moviesSubject.next(this._movies);
  }
}
