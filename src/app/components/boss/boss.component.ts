import { Component, OnInit } from '@angular/core';
import {HeroService, RootObject, RootObjecto} from '../services/hero.service';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {

  messageForUser: string;
  rootObject: RootObject;
  rootObjecto: RootObjecto;
  messageForGuild: string;

  constructor(private heroService: HeroService){

  }

  title = 'Boss';
  name: string;


  ngOnInit(): void {
    this.heroService.getBoss().subscribe(value => {
      this.rootObject = value;
    });

    this.heroService.getGuild().subscribe(value => {
      this.rootObjecto = value;
    });
  }

  sayHello() {
    this.messageForUser = 'Dzisiejszy boss to:' + this.rootObject.nameBoss;
  }

  sayGuild() {
    this.messageForGuild = 'Dzisiejsza gildia to:' + this.rootObjecto.name + ', ma ' + this.rootObjecto.members + ' czlonkow i ' + this.rootObjecto.achievements + ' osiagniec.';
  }

  check(value:string) {
    this.messageForUser = 'Boss: ' + this.rootObject.nameBoss;
  }
}
