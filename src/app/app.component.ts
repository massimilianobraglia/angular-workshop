import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  loaded: boolean;

  constructor() {
    this.title = 'my fantastic angular-workshop';
    this.loaded = false;

    setTimeout(() => {
      this.loaded = true;
    }, 4000);
  }
}
