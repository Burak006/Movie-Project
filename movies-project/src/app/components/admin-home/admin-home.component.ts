import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersGetModel } from 'src/app/models/UsersGetModel';
import { LoginUserModel } from 'src/app/models/loginUser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  users:UsersGetModel[]=[];

  constructor(private usersService:UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(data => this.users = data)
   }


  
}
