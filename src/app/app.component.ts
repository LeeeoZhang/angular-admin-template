import { Component } from '@angular/core';
import { Hero } from './Hero'

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }} id:{{hero.id}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),

  ];
  myHero = this.heroes[0];
}
