import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAnimeComponent } from './components/search-anime/search-anime.component';
import { ResultAnimeComponent } from './components/result-anime/result-anime.component';
import { SelectedAnimeComponent } from './components/selected-anime/selected-anime.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfoAnimeComponent } from './components/info-anime/info-anime.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAnimeComponent,
    ResultAnimeComponent,
    SelectedAnimeComponent,
    InfoAnimeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
