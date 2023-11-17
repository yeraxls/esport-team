import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../../Services/teams.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  _teamlol : any[] = []
  get teamlol(){
    return this._teamlol
  }
  set teamlol(v : any[]){
    this._teamlol = v
  }

  createUrl(player: any){
    return `../../../assets/images/${player.position}.PNG`
  }
  constructor(private service : TeamsService){
    this._teamlol = service.getLolTeam()
  }

  playerDetail(player: any){
    console.log(player);
    
  }

}
