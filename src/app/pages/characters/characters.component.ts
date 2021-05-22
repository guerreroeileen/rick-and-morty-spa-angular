import { Component, OnInit } from '@angular/core';

import { CharacterService } from './../../services/character/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private characterService : CharacterService) { }

  characters:any = [];
  actualPage:number = 1;
  infoPages:any = {};
  showLoading:boolean = false;

  ngOnInit(): void {
    this.showLoading = true;
    this.characterService.getAllCharacters().subscribe(resp => {
      this.characters = resp.results;
      this.infoPages = resp.info;
      this.showLoading = false;
    });
  }

  loadNextPage() {
    this.showLoading = true;
    this.actualPage = this.actualPage +1;
    if (this.actualPage <= this.infoPages.pages){
      this.characterService.getNexCharactersPage(this.actualPage).subscribe(resp => {
        this.characters.push(...resp.results);
        this.infoPages = resp.info;
        this.showLoading = false;
      });
    }
  }

}
