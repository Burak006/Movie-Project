import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryModul } from 'src/app/models/category.module';
import { MoviesModul } from 'src/app/models/movies.module';
import { ProvinceGetModul } from 'src/app/models/province.module';
import { CategoryService } from 'src/app/services/category.service';
import { ProvinceService } from 'src/app/services/province.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-movies-update',
  templateUrl: './movies-update.component.html',
  styleUrls: ['./movies-update.component.css']
})
export class MoviesUpdateComponent implements OnInit {

  categories:CategoryModul[]=[];
  provinces:ProvinceGetModul[]=[];
  movieUpdateForm:FormGroup;
  movies:MoviesModul;
  params:number;
  private location:Location;

  constructor(
    private activatedRoute:ActivatedRoute,
    private categoryService:CategoryService,
    private provinceService:ProvinceService,
    private moviesService:MoviesService,
    private formBuilder: FormBuilder
   ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      console.log(params);
      
      this.getMoviesBydId(params["id"]);
      
      
    })
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

  getMoviesBydId(id){
    this.moviesService.getMoviesDetail(id).subscribe(data =>{
       this.movies = data;
      this.createMoviesFrom();

      })
   } 
  createMoviesFrom() {
    this.movieUpdateForm = this.formBuilder.group({
      name: [this.movies.name, Validators.required],
      country: [this.movies.country, Validators.required],
      imdb: [this.movies.imdb, Validators.required],
      category: [this.movies.category, Validators.required],
      year: [this.movies.year, Validators.required],
      Year_of_construction: [this.movies.Year_of_construction, Validators.required],
      duration: [this.movies.duration, Validators.required],
      date_of_update: [this.movies.date_of_update, Validators.required],
      image: [this.movies.image, Validators.required],
      video: [this.movies.video, Validators.required],
      explanation: [this.movies.explanation, Validators.required],
      actors_1: [this.movies.actors_1, Validators.required],
      actors_2: [this.movies.actors_2, Validators.required],
      actors_3: [this.movies.actors_3, Validators.required],
      actors_4: [this.movies.actors_4, Validators.required],
    });
  }

  MoviesUpdate() {
    this.moviesService
      .MoviesUpdate(
        this.activatedRoute.snapshot.params['id'],
        this.movieUpdateForm.value
      )
      .subscribe((response) => {});

      Swal.fire({
        icon:'success',
        title: 'Film Bilgileri Güncellendi',
        toast: true,
        timer:3000,
        timerProgressBar:true,
        showConfirmButton:false,
        position:'bottom-right',
      });
  }

}
