import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersGetModel } from '../models/UsersGetModel';
import { LoginUserModel } from '../models/loginUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<UsersGetModel[]>{
    return this.httpClient.get<UsersGetModel[]>(this.userUrl)
  }

  getLoginId(id:number):Observable<UsersGetModel>{
    return this.httpClient.get<UsersGetModel>(this.userUrl + "/"+ id)
  }
  
  userAdd(users:UsersGetModel):Observable<UsersGetModel> {
    return this.httpClient.post<UsersGetModel>(this.userUrl + "/", users);
  }

  delete(id: number) {
    return this.httpClient.delete(this.userUrl + '/' + id);
  }

  LoginUpdate(id, logins:UsersGetModel): Observable<UsersGetModel[]> {
    return this.httpClient.put<UsersGetModel[]>(this.userUrl + '/' + id, logins);
  }

  loginGetUser(loginUser:LoginUserModel):Observable<LoginUserModel[]>{
    return this.httpClient.get<LoginUserModel[]>(this.userUrl+"?email="+loginUser.email+"&pasword="+loginUser.pasword)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
