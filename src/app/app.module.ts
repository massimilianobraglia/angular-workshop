import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    // also every new Pipe (@Pipe) should be declared here
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
