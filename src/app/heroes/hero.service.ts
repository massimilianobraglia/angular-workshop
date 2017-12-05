import { Injectable } from '@angular/core';
import { Hero } from '../../types/hero';

@Injectable()
export class HeroService {
  constructor() { }

  getHeroes(): Hero[] {
    return [
      new Hero(1, 'Hercules'),
      new Hero(2, 'Hercules Good'),
      new Hero(3, 'Hercules Evil', 100),
    ];
  }
}
