import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero;

  constructor() {

  }

  ngOnInit() {
    this.hero = new Hero();
    this.hero.id = 100;
    this.hero.name = 'Goffredo';
  }
}
