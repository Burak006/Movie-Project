import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { CategoryModul } from 'src/app/models/category.module';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:CategoryModul[]=[];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory().subscribe((data) =>{ 
    this.categories = data;
    })
   }

   
   delete(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn bg-gradient-info active ms-3',
        cancelButton: 'btn bg-gradient-primary active',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Emin misiniz?',
        text: 'Bu işlem geri alınamaz!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet !',
        cancelButtonText: 'Hayır',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.categoryService.delete(id).subscribe(() => {
            swalWithBootstrapButtons.fire(
              'Silindi!',
              'İstediğiniz veri silme işlemi tamamlandı.',
              'success'
            );
          }),
            setTimeout(() => {
              window.location.reload();
            }, 3000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'İptal edildi',
            'Veriniz hala güvende :)',
            'error'
          );
        }
      });
  }


}
