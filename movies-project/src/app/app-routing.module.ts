
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginListComponent } from './components/login-list/login-list.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MoviesComponent } from './components/movie/movies/movies.component';
import { MoviesAddComponent } from './components/movie/movies-add/movies-add.component';
import { MoviesDetailComponent } from './components/movie/movies-detail/movies-detail.component';
import { MoviesUpdateComponent } from './components/movie/movies-update/movies-update.component';
import { SeriesComponent } from './components/movie/series/series.component';
import { AnimesComponent } from './components/movie/animes/animes.component';
import { CategoryComponent } from './components/category/category/category.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/category/category-update/category-update.component';
import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';

const routes: Routes = [

  { path:"", component: HomeComponent },
  { path:'details/:id', component: MoviesDetailComponent},
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'series',component:SeriesComponent},
  {path:'animes',component:AnimesComponent},


  { path: 'admin', component: AdminPanelComponent, children:[

  { path:"",component:AdminHomeComponent},

  { path:'category',component:CategoryComponent},
  { path:'category/add', component: CategoryAddComponent},
  { path:'category/update/:id', component: CategoryUpdateComponent},

  { path:'movies', component: MoviesListComponent},
  { path:'movies/add', component: MoviesAddComponent},
  { path:'movies/details/:id', component: MoviesDetailComponent},
  { path:'movies/update/:id', component: MoviesUpdateComponent},


  { path:'login/list',component:LoginListComponent}

  ],
  canActivate:[LoginGuard]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
