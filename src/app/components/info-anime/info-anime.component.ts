import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime, MyAnime } from 'src/app/interfaces/api-movies';
import { AnimeService } from 'src/app/services/anime-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css']
})
export class InfoAnimeComponent implements OnInit {

  showFullDescription = false;
  anime: Anime[] | null = null;
  animeId = {"mal_id":51105,"url":"https://myanimelist.net/anime/51105/NieR_Automata_Ver11a","images":{"jpg":{"image_url":"https://cdn.myanimelist.net/images/anime/1399/128318.jpg","small_image_url":"https://cdn.myanimelist.net/images/anime/1399/128318t.jpg","large_image_url":"https://cdn.myanimelist.net/images/anime/1399/128318l.jpg"},"webp":{"image_url":"https://cdn.myanimelist.net/images/anime/1399/128318.webp","small_image_url":"https://cdn.myanimelist.net/images/anime/1399/128318t.webp","large_image_url":"https://cdn.myanimelist.net/images/anime/1399/128318l.webp"}},"trailer":{"youtube_id":"hlP8Bl_YCdw","url":"https://www.youtube.com/watch?v=hlP8Bl_YCdw","embed_url":"https://www.youtube.com/embed/hlP8Bl_YCdw?enablejsapi=1&wmode=opaque&autoplay=1","images":{"image_url":"https://img.youtube.com/vi/hlP8Bl_YCdw/default.jpg","small_image_url":"https://img.youtube.com/vi/hlP8Bl_YCdw/sddefault.jpg","medium_image_url":"https://img.youtube.com/vi/hlP8Bl_YCdw/mqdefault.jpg","large_image_url":"https://img.youtube.com/vi/hlP8Bl_YCdw/hqdefault.jpg","maximum_image_url":"https://img.youtube.com/vi/hlP8Bl_YCdw/maxresdefault.jpg"}},"approved":true,"titles":[{"type":"Default","title":"NieR:Automata Ver1.1a"},{"type":"Japanese","title":"NieR:Automata Ver1.1a"}],"title":"NieR:Automata Ver1.1a","title_english":null,"title_japanese":"NieR:Automata Ver1.1a","title_synonyms":[],"type":"TV","source":"Game","episodes":12,"status":"Currently Airing","airing":true,"aired":{"from":"2023-01-08T00:00:00+00:00","to":"2023-07-23T00:00:00+00:00","prop":{"from":{"day":8,"month":1,"year":2023},"to":{"day":23,"month":7,"year":2023}},"string":"Jan 8, 2023 to Jul 23, 2023"},"duration":"23 min per ep","rating":"PG-13 - Teens 13 or older","score":7.39,"scored_by":32412,"rank":2123,"popularity":947,"members":237422,"favorites":1755,"synopsis":"In a post-apocalyptic world overrun by alien-crafted \"Machine Lifeforms,\" humanity is preparing for its last stand. Forced to retreat to the Moon for safety, humans are pinning their hopes on a group of man-made androids known as YoRHa soldiers. Led by the all-purpose battle android YoRHa 2-gou B-gata \"2B,\" the group will fight to take control of the Earth back from its invaders.\n\nAs war against the machines rages on, the YoRHa slowly begin to see the first shards of truth underlying the brutal conflict. Facing the harsh reality before her, the unwavering warrior 2B starts to question her very existence and just how much she must sacrifice for the sake of humanity.\n\n[Written by MAL Rewrite]","background":"Due to COVID-19, the broadcast was delayed following its third episode on January 22, 2023 until February 19, 2023. Due to COVID-19, the broadcast was delayed again following its eighth episode on March 18, 2023 until July 23, 2023.","season":"winter","year":2023,"broadcast":{"day":"Sundays","time":"00:00","timezone":"Asia/Tokyo","string":"Sundays at 00:00 (JST)"},"producers":[{"mal_id":17,"type":"anime","name":"Aniplex","url":"https://myanimelist.net/anime/producer/17/Aniplex"},{"mal_id":58,"type":"anime","name":"Square Enix","url":"https://myanimelist.net/anime/producer/58/Square_Enix"}],"licensors":[{"mal_id":493,"type":"anime","name":"Aniplex of America","url":"https://myanimelist.net/anime/producer/493/Aniplex_of_America"}],"studios":[{"mal_id":56,"type":"anime","name":"A-1 Pictures","url":"https://myanimelist.net/anime/producer/56/A-1_Pictures"}],"genres":[{"mal_id":1,"type":"anime","name":"Action","url":"https://myanimelist.net/anime/genre/1/Action"},{"mal_id":10,"type":"anime","name":"Fantasy","url":"https://myanimelist.net/anime/genre/10/Fantasy"},{"mal_id":24,"type":"anime","name":"Sci-Fi","url":"https://myanimelist.net/anime/genre/24/Sci-Fi"}],"explicit_genres":[],"themes":[],"demographics":[]};
  videoUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const animeId = this.route.snapshot.paramMap.get('id');
    if (animeId) {
      this.animeService.getAnimeById(animeId).subscribe(result => {
        this.anime = result.data;
        console.log("Hay esto no mas "+JSON.stringify(this.anime));
        this.animeId = JSON.parse(JSON.stringify(this.anime));
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.animeId.trailer.url);
      });
    }
  }
}
