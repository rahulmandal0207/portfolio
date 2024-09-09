import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [HeroComponent, ContactComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
