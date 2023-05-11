import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesModul } from 'src/app/models/movies.module';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movie:MoviesModul[]=[];
  filterText:string="";

  constructor(private activatedRoute:ActivatedRoute, private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.getMovies()
    })
  }

  getMovies(){
    this.moviesService.getMovies().subscribe(data => this.movie = data)
   }
   
   getMovieIdClick(id:number){
    this.moviesService.getMoviesAdd(id).subscribe(data => {
      this.movie = data
    })
   }


   getMoviesBydId(id:number){
    this.moviesService.getMoviesBydId(id).subscribe((Response)=>{
      this.movie=Response;
    });
   }




}
