import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Components/index/index.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { KrishnaComponent } from './Components/krishna/krishna.component';
import { LoginComponent } from './Components/login/login.component';
import { MoviePlayComponent } from './Components/movie-play/movie-play.component';
import { RegisterComponent } from './Components/register/register.component';
import { MovieViewComponent } from './Components/movie-view/movie-view.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { SearchComponent } from './Components/search/search.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { TvHomeComponent } from './Components/tv-home/tv-home.component';
import { TvshowComponent } from './Components/tvshow/tvshow.component';
import { VerifyComponent } from './Components/verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoriesComponent,
    KrishnaComponent,
    LoginComponent,
    MoviePlayComponent,
    RegisterComponent,
    MovieViewComponent,
    SearchResultComponent,
    SearchComponent,
    SubscriptionComponent,
    TvHomeComponent,
    TvshowComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
