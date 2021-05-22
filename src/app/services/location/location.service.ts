import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private API_LOCATIONS = "https://rickandmortyapi.com/api/location";

  constructor(private http: HttpClient) { }

  public getAllLocations(): Observable<any> {
    return this.http.get(this.API_LOCATIONS);
  }
}
