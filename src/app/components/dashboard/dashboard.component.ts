import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TeamComponent, AboutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
}
