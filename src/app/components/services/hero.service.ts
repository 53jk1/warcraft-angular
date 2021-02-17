import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import {BossComponent} from '../boss/boss.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  bossComponent: BossComponent;

  id = 1;

  constructor(private httpClient: HttpClient) {}

  public getBoss(): Observable<RootObject> {
    return this.httpClient.get<RootObject>('http://localhost:8080/api/boss/' + this.id);
  }

  public getGuild(): Observable<RootObjecto> {
    return this.httpClient.get<RootObjecto>('http://localhost:8080/api/guild/' + this.id);
  }
}

export interface RootObject {
  id: number;
  nameBoss: string;
}

export interface RootObjecto {
  id: number;
  name: string;
  members: number;
  achievements: number;
}
