import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModul } from 'src/app/models/category.module';
import { MoviesModul } from 'src/app/models/movies.module';
import { ProvinceGetModul } from 'src/app/models/province.module';
import { CategoryService } from 'src/app/services/category.service';
import { MoviesService } from 'src/app/services/movies.service';
import { ProvinceService } from 'src/app/services/province.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  categories:CategoryModul[]=[];
  provinces:ProvinceGetModul[]=[];
  serie:MoviesModul[]=[];
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
    this.moviesService.getMovies().subscribe(data => this.serie = data)
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
      this.serie = data
    })
   }


   getMoviesBydId(id:number){
    this.moviesService.getMoviesBydId(id).subscribe((Response)=>{
      this.serie=Response;
    });
   }


}
