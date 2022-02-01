import { CharacterService } from '../services/character.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from '../model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  formulaire : FormGroup

  characterList: Character[] = [];
  
  constructor(private characterService: CharacterService) {
    this.formulaire = new FormGroup({
    title: new FormControl(),
    key: new FormControl(),
    name: new FormControl(),
    active: new FormControl()
    })
   }

  ngOnInit(): void {
    this.characterService.getAll().subscribe({
      next: data => this.characterList = data,
      error: err => console.error(err),
      complete: () => console.log("user service fini")
    })
  }

  save(): void {
    this.characterService.create(this.formulaire.value).subscribe({
     
    })
  }

}
