import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  redirigirAYoutube() {
    // Detener todos los audios antes de redirigir a Kahoot
    window.open('https://www.youtube.com/watch?v=Ha8qGJ5KMKM&feature=youtu.be', '_blank');
  }
}
