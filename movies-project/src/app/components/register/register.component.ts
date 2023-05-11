import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UsersGetModel } from 'src/app/models/UsersGetModel';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

users:UsersGetModel[]=[];
usersAdd:FormGroup

  constructor(private formbuilder:FormBuilder,
    private UsersService:UsersService,
    ) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

   createUserAddForm(){
    this.usersAdd= this.formbuilder.group({
      name:["",[Validators.required,]],
      surname:["",[Validators.required,]],
      email:["",[Validators.required,]],
      pasword:["",[Validators.required,]],
      address:["",[Validators.required,]],
    })
  }

  userAdd(){
   if(this.usersAdd.valid){
    this.UsersService.userAdd(this.usersAdd.value).subscribe((response)=>{
       });

      Swal.fire({
        icon:'success',
        title: 'Kayıt Başarılı',
        text:'Giriş Yapabilirsiniz',
        toast: true,
        timer:3000,
        timerProgressBar:true,
        showConfirmButton:false,
        position:'bottom-right',
      });
  }
}
}
