import { Component, OnInit, Input } from '@angular/core';
import { Musique } from "../musique";

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})

export class MusiqueComponent implements OnInit {

  @Input()
  m: Musique;

  constructor() { }

  ngOnInit() {
  }

}
