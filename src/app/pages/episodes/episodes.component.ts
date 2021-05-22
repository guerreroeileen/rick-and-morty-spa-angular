import { Component, OnInit } from '@angular/core';

import { EpisodeService } from './../../services/episode/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor( private episodeService: EpisodeService) { }

  espisodes: any = {};

  ngOnInit(): void {
    this.episodeService.getAllEpisodes().subscribe(resp => {
      this.espisodes = resp.results;
    })
  }

}
