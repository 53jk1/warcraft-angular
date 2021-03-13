import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  id = 1;

  constructor(private httpClient: HttpClient) {}

  public getBoss(): Observable<RootObject> {
    return this.httpClient.get<RootObject>('http://localhost:8080/api/boss/' + this.id);
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
