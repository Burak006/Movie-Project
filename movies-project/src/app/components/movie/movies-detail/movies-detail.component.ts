import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesModul } from 'src/app/models/movies.module';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  detail:any;
  slider:MoviesModul[]=[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private moviesService:MoviesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.getMoviesDetail(params["id"])
      
    });
    this.getMovies();
  }

  getMovies(){
    this.moviesService.getMovies().subscribe(data => this.slider = data)
   }

  getMoviesDetail(id){
    this.moviesService.getMoviesDetail(id).subscribe(data =>{
       this.detail = data
       console.log(data);
       
      })
   } 


}
