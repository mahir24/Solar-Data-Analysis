import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Component logic goes here
  //Mock data
  totalEnergyProduction = 120; 
  effeciency = 86;
  peakTime  = "10:00 AM - 2:30 PM";
}
