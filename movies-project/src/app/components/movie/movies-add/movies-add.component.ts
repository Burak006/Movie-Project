import { ProvinceService } from './../../../services/province.service';
import { CategoryService } from './../../../services/category.service';
import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModul } from 'src/app/models/category.module';
import { ProvinceGetModul } from 'src/app/models/province.module';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  categories:CategoryModul[]=[];
  provinces:ProvinceGetModul[]=[];
  movieAddForm:FormGroup

  constructor(private formbuilder:FormBuilder,
    private categoryService:CategoryService,
    private provinceService:ProvinceService,
    private moviesService:MoviesService) { }

  ngOnInit(): void {
this.createProductsAddForm();
this.getProvinces();
this.getCategory();
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
 
  createProductsAddForm(){
    this. movieAddForm= this.formbuilder.group({
      name:["",[Validators.required,]],
      country:["",[Validators.required,]],
      imdb:["",[Validators.required,]],
      category:["",[Validators.required,]],
      year:["",[Validators.required,]],
      Year_of_construction:["",[Validators.required,]],
      duration:["",[Validators.required,]],
      date_of_update:["",[Validators.required,]],
      image:["",[Validators.required,]],
      video:["",[Validators.required,]],
      explanation:["",[Validators.required,]],
      actors_1:["",[Validators.required,]],
      actors_2:["",[Validators.required,]],
      actors_3:["",[Validators.required,]],
      actors_4:["",[Validators.required,]],
    })
  }

  add(){
    this.moviesService
    .add(this.movieAddForm.value).subscribe((response)=>{
      console.log(response);
    });

    Swal.fire({
      icon:'success',
      title: 'Yeni Film Eklendi',
      toast: true,
      timer:3000,
      timerProgressBar:true,
      showConfirmButton:false,
      position:'bottom-right',
    });
    
  }


}
