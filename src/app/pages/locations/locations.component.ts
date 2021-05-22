import { Component, OnInit } from '@angular/core';

import { LocationService } from '../../services/location/location.service'

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  locations: any = {};

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(resp => {
      this.locations = resp.results;
    })
  }

}
