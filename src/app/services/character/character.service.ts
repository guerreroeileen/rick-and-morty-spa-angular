import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private API_CHARACTERS = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  public getAllCharacters(): Observable<any> {
    return this.http.get(this.API_CHARACTERS);
  }

  public getNexCharactersPage(page: number): Observable<any> {
    return this.http.get(this.API_CHARACTERS+"?page="+page);
  }
}
