import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Components/categories/categories.component';
import { IndexComponent } from './Components/index/index.component';
import { KrishnaComponent } from './Components/krishna/krishna.component';
import { LoginComponent } from './Components/login/login.component';
import { MoviePlayComponent } from './Components/movie-play/movie-play.component';
import { MovieViewComponent } from './Components/movie-view/movie-view.component';
import { RegisterComponent } from './Components/register/register.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { SearchComponent } from './Components/search/search.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { TvHomeComponent } from './Components/tv-home/tv-home.component';
import { TvshowComponent } from './Components/tvshow/tvshow.component';
import { VerifyComponent } from './Components/verify/verify.component';

const routes: Routes = [
  { path : "", component : IndexComponent},
  { path : "index", component: IndexComponent },
  { path : "tv-home", component : TvHomeComponent },
  { path : "movie-view", component : MovieViewComponent },
  { path : "tvshow-view", component : TvshowComponent },
  { path : "movie-play", component : MoviePlayComponent },
  { path : "login", component : LoginComponent }, 
  { path : "register", component : RegisterComponent }, 
  { path : "subscription", component : SubscriptionComponent }, 
  { path : "search", component : SearchComponent },
  { path : "categories", component : CategoriesComponent },
  { path : "search-results", component : SearchResultComponent },
  { path : "verify", component : VerifyComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
