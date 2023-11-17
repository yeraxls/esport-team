import { Injectable } from '@angular/core';
import * as lolteam from "../../assets/DataTeams/TeamLol.json"
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  public getLolTeam (){
    return [
      {
          "id": 1,
          "name" : "Werlyb",
          "position" :"top"
      },
      {
          "id": 2,
          "name" : "Razork",
          "position" :"jungle"
      },
      {
          "id": 3,
          "name" : "Faker",
          "position" :"mid"
      },
      {
          "id": 4,
          "name" : "Gumayusi",
          "position" :"adc"
      },
      {
          "id": 5,
          "name" : "Keria",
          "position" :"support"
      }
  ]
  }
}
