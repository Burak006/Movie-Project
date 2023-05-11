import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm:FormGroup 
  constructor(private formbuilder:FormBuilder, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.createProductsAddForm();
  }

  createProductsAddForm(){
    this. categoryAddForm= this.formbuilder.group({
      name:["",[Validators.required,]],
    })
  }

  add(){
    this.categoryService
    .add(this.categoryAddForm.value).subscribe((response)=>{
      console.log(response);
    });

    Swal.fire({
      icon:'success',
      title: 'Yeni Kategori Eklendi',
      toast: true,
      timer:3000,
      timerProgressBar:true,
      showConfirmButton:false,
      position:'bottom-right',
    });

  }
}
