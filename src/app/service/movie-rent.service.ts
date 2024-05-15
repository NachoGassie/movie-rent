import { Injectable } from '@angular/core';
import { Movie } from '../common/common.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieRentService {
  
  private _movies: Movie[] = [];
  private _moviesSubject = new BehaviorSubject<Movie[]>(this._movies);
  movies = this._moviesSubject.asObservable();

  addToRented(movie: Movie): void{
    const movieFound = this._movies.find(m => m.id === movie.id);
    if (!movieFound) this._movies.push(movie);
    movie.isRented = true;

    this._moviesSubject.next(this._movies);
  }

  removeFromRented(movie: Movie): void{
    const filtered = this._movies.filter(m => m.id !== movie.id);
    movie.isRented = false;
    this._moviesSubject.next(filtered);
  }
}
