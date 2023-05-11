import { CategoryModul } from './../models/category.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesModul } from '../models/movies.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  queryPath :string=""
  Selectedcategory:CategoryModul[]=[];

  path:string= "http://localhost:3000/movies"

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<MoviesModul[]> {
    return this.httpClient.get<MoviesModul[]>(this.path)
  }
//array silinecek
  getMoviesDetail(id:number):Observable<MoviesModul> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
    return this.httpClient.get<MoviesModul>(this.path + "/" + id,httpOptions)
  }

  getMoviesBydId(id:number):Observable<MoviesModul[]> {
    return this.httpClient.get<MoviesModul[]>(this.path+"?movieId="+id)
  }
  getMoviesAdd(id:number):Observable<MoviesModul[]> {
    return this.httpClient.get<MoviesModul[]>(this.path+"movie-add")
  }
  add(movie:MoviesModul):Observable<MoviesModul> {
    return this.httpClient.post<MoviesModul>(this.path + "/", movie);
  }
 
  MoviesUpdate(id, movie:MoviesModul): Observable<MoviesModul[]> {
    return this.httpClient.put<MoviesModul[]>(this.path + '/' + id, movie);
  }

  delete(id: number) {
    return this.httpClient.delete(this.path + '/' + id);
  }


  
  
}
