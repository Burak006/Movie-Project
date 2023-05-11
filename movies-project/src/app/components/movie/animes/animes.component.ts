import { ProvinceGetModul } from 'src/app/models/province.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesModul } from 'src/app/models/movies.module';
import { MoviesService } from 'src/app/services/movies.service';
import Swal from 'sweetalert2';
import { ProvinceService } from 'src/app/services/province.service';
import { CategoryModul } from 'src/app/models/category.module';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  categories:CategoryModul[]=[];
  provinces:ProvinceGetModul[]=[];
  anime:MoviesModul[]=[];
  filterText:string="";
  
  constructor(private activatedRoute:ActivatedRoute,
    private categoryService:CategoryService,
    private provinceService:ProvinceService,
    private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.getMovies();
      this.getProvinces();
      this.getCategory();
    })
  }

  getMovies(){
    this.moviesService.getMovies().subscribe(data => this.anime = data)
   }

   getProvinces(){
    this.provinceService.getProvinces().subscribe((data) =>{ 
    this.provinces = data;
    })
   }
   
   getCategory(){
    this.categoryService.getCategory().subscribe((data) =>{ 
    this.categories = data;
    })
   }

   getMovieIdClick(id:number){
    this.moviesService.getMoviesAdd(id).subscribe(data => {
      this.anime = data
    })
   }


   getMoviesBydId(id:number){
    this.moviesService.getMoviesBydId(id).subscribe((Response)=>{
      this.anime=Response;
    });
   }

}
