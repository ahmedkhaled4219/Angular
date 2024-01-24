import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: string[] =  ['Restaurants Web App', 'Medical Web App', 'Booking Web App', 'Delivery Mobile App','Online Store','ITI Mobile App'];

}
