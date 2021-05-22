import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private API_EPISODES = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) { }

  public getAllEpisodes(): Observable<any> {
    return this.http.get(this.API_EPISODES);
  }
}
