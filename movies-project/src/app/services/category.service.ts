import { Injectable } from '@angular/core';
import { CategoryModul } from '../models/category.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  path:string= "http://localhost:3000/category"

  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<CategoryModul[]> {
    return this.httpClient.get<CategoryModul[]>(this.path)
  }
//array silinecek
  getCategoryDetail(id:number):Observable<CategoryModul> {
    return this.httpClient.get<CategoryModul>(this.path + "/" + id)
  }

  getCategoryId(id:number):Observable<CategoryModul>{
    return this.httpClient.get<CategoryModul>(this.path + "/"+ id)
  }
  getCategoryAdd(id:number):Observable<CategoryModul[]> {
    return this.httpClient.get<CategoryModul[]>(this.path+"category-add")
  }
  add(category:CategoryModul):Observable<CategoryModul> {
    return this.httpClient.post<CategoryModul>(this.path + "/", category);
  }
 
  CategoryUpdate(id, category:CategoryModul): Observable<CategoryModul[]> {
    return this.httpClient.put<CategoryModul[]>(this.path + '/' + id, category);
  }

  delete(id: number) {
    return this.httpClient.delete(this.path + '/' + id);
  }
}
