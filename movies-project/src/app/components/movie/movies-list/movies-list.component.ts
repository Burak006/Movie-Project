import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesModul } from 'src/app/models/movies.module';
import { MoviesService } from 'src/app/services/movies.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

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
          this.moviesService.delete(id).subscribe(() => {
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
