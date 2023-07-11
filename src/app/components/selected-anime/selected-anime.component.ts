import { Component, OnInit } from '@angular/core';
import { MyAnime } from 'src/app/interfaces/api-movies';
import { AnimeService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css']
})
export class SelectedAnimeComponent implements OnInit {
  animes_selected: MyAnime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animes_selected = JSON.parse(localStorage.getItem('my_anime') as any) || [];

    this.animeService.getAnimeSelected().subscribe(anime => {
      this.animes_selected.push(anime)
      localStorage.setItem('my_anime', JSON.stringify(this.animes_selected))
    })
  }

  increaseWatch(anime: MyAnime) {
    anime.watched_episodes++;
    localStorage.setItem('my_anime', JSON.stringify(this.animes_selected))
  }

  decreaseWatch(anime: MyAnime) {
    anime.watched_episodes--;
    localStorage.setItem('my_anime', JSON.stringify(this.animes_selected))
  }

  eraseWatch(anime: MyAnime) {
    // Obtén el array almacenado en el Local Storage
    let storedArrayString = localStorage.getItem('my_anime');
    let storedArray: MyAnime[] = [];
    

    // Verifica si storedArrayString no es nulo
    if (storedArrayString !== null) {
      storedArray = JSON.parse(storedArrayString);

      // Busca el índice del elemento que deseas eliminar
      let index = storedArray.findIndex(item => item.id === anime.id);

      // Si se encuentra el elemento, elimínalo del array
      if (index !== -1) {
        storedArray.splice(index, 1);
        this.animes_selected.splice(index, 1);
      }

      // Guarda el array actualizado en el Local Storage
      localStorage.setItem('my_anime', JSON.stringify(storedArray));
    }
  }

}