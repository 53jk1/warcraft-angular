import { Component, OnInit } from '@angular/core';
import { HeroService, RootObject} from '../services/hero.service';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {

  messageForUser: string;
  rootObject: RootObject;

  constructor(private heroService: HeroService){

  }

  title = 'Boss';
  name: string;


  ngOnInit(): void {
    this.heroService.getBoss().subscribe(value => {
      this.rootObject = value;
    });
  }

  sayHello() {
    this.messageForUser = 'Dzisiejszy boss to: ' + this.rootObject.nameBoss;
  }

  check(value:string) {
    this.messageForUser = 'Boss: ' + this.rootObject.nameBoss;
  }
}
