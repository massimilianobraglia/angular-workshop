import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  backgroundColor: string;
  padding: string;
  loaded: boolean;
  moreHeroes: Hero[];

  constructor(private _service: HeroService) {
    this.backgroundColor = '#FFFF00';
    this.padding = '10px 5px';
    this.loaded = false;

    setTimeout(() => {
      this.loaded = true;
    }, 10000);
  }

  ngOnInit(): void {
    this.hero = new Hero(100, 'Goffredo');
    this.moreHeroes = this._service.getHeroes();
  }

  greetings(name: string): void {
    alert('ciao ' + name);
  }
}
