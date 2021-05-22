import { Component, OnInit } from '@angular/core';

import { CharacterService } from './../../services/character/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
