import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoAnimeComponent } from './components/info-anime/info-anime.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'anime/:id', component: InfoAnimeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
