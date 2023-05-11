import { Component, OnInit } from '@angular/core';
import { UsersGetModel } from 'src/app/models/UsersGetModel';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  users:UsersGetModel[]=[];
  
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(data => this.users = data)
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
          this.usersService.delete(id).subscribe(() => {
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
