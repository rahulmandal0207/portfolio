import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ContactComponent } from "../contact/contact.component";
import { EducationComponent } from "../education/education.component";
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [HeroComponent, ContactComponent, EducationComponent, ExperienceComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
