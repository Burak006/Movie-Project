import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './layouts/navi/navi.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/register/register.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { SettingsComponent } from './layouts/settings/settings.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { HomeComponent } from './components/home/home.component';
import { LoginListComponent } from './components/login-list/login-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { MoviesComponent } from './components/movie/movies/movies.component';
import { MoviesAddComponent } from './components/movie/movies-add/movies-add.component';
import { MoviesUpdateComponent } from './components/movie/movies-update/movies-update.component';
import { MoviesDetailComponent } from './components/movie/movies-detail/movies-detail.component';
import { SeriesComponent } from './components/movie/series/series.component';
import { AnimesComponent } from './components/movie/animes/animes.component';
import { CategoryComponent } from './components/category/category/category.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/category/category-update/category-update.component';
import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';







@NgModule({
    declarations: [
        AppComponent,
        NaviComponent,
        FilterPipe,
        LoginComponent,
        AdminPanelComponent,
        FooterComponent,
        ToolbarComponent,
        SettingsComponent,
        AdminHomeComponent,
        HomeComponent,
        LoginListComponent,
        ContactComponent,
        RegisterComponent,
        MoviesComponent,
        MoviesAddComponent,
        MoviesUpdateComponent,
        MoviesDetailComponent,
        SeriesComponent,
        AnimesComponent,
        CategoryComponent,
        CategoryAddComponent,
        CategoryUpdateComponent,
        MoviesListComponent,


     
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),

    ]
})
export class AppModule { }
