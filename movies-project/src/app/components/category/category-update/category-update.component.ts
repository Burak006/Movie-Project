import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryModul } from 'src/app/models/category.module';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  categoryUpdateForm: FormGroup;
  categories: CategoryModul;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoryService:CategoryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCategoryId(params['id']);
    });
  }

  createCategoryFrom() {
    this.categoryUpdateForm = this.formBuilder.group({
      name: [this.categories.name, Validators.required],
    });
  }

  getCategoryId(id: number) {
    this.categoryService.getCategoryId(id).subscribe((data) => {
      this.categories = data;
      this.createCategoryFrom();
    });
  }
  
  CategoryUpdate() {
    this.categoryService
      .CategoryUpdate(
        this.activatedRoute.snapshot.params['id'],
        this.categoryUpdateForm.value
      )
      .subscribe((response) => {});

      Swal.fire({
        icon:'success',
        title: 'Kategori Bilgileri Güncellendi',
        toast: true,
        timer:3000,
        timerProgressBar:true,
        showConfirmButton:false,
        position:'bottom-right',
      });
  }
}
