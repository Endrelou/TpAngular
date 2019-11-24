import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Musique } from "../musique";
import { lienAllowedValidator } from '../shared/lien.validator';


@Component({
  selector: 'app-formusique',
  templateUrl: './formusique.component.html',
  styleUrls: ['./formusique.component.css']
})
export class FormusiqueComponent implements OnInit {
  musiques: Musique[];
  Data: FormGroup;
  champsValid: boolean = false;


  constructor(private formBuilder: FormBuilder) {   
  }

  ngOnInit() {
    this.Data = this.formBuilder.group({
      lien: ['', [
        Validators.required, 
        lienAllowedValidator('https://www.youtube.com/watch?v=')
      ]],
      nom: ['', Validators.required],
      favoris:  [false]
    });
  
    const musiques = localStorage.getItem('musiques');
    this.musiques = musiques ? JSON.parse(musiques) : [];
  }

  updtMusiques() {
    localStorage.setItem('musiques', JSON.stringify(this.musiques));
  }


  onSumbit() {
    this.musiques.push({
      id: this.musiques.length > 0 ? this.musiques[(this.musiques.length - 1)].id + 1 : 0,
      lien: this.Data.value.lien,
      nom: this.Data.value.nom,
      favoris: this.Data.value.favoris,
      date: new Date()
    });

    this.champsValid = true;
    this.updtMusiques();
  }
}
