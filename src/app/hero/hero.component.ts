import { Component, ElementRef } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  ngOnInit() {
    window.setTimeout(this.startTyping, 100);
  }



  startTyping() {
    new Typed('.multiText', {
      strings: ['Student', 'Coder', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
      
    }).cursor.style.color = "#f6483b";
  }
}
