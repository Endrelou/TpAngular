import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formusique',
  templateUrl: './formusique.component.html',
  styleUrls: ['./formusique.component.css']
})
export class FormusiqueComponent implements OnInit {
  infosMusique: FormGroup;
  champsValid = false;

  constructor(private formBuilder: FormBuilder) {    
  }

  ngOnInit() {
    this.infosMusique = this.formBuilder.group({
      lien: ['', Validators.required],
      favoris:  [false]
    });
  }


  onSumbit() {
    console.log(this.infosMusique.value);
    
    this.champsValid = true;
  }


}
