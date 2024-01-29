import { Component,ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  paragraphVisible = false;
  showButton: boolean = true;
  
  mostrarParrafo() {
    this.paragraphVisible = !this.paragraphVisible;
    this.showButton = false;
  }
  
  isAudioPlaying: boolean = false;
  
  @ViewChild('btnLehenengoDesberdintasuna', { static: false }) btnLehenengoDesberdintasuna: IonButton | undefined;

  playAudio(audioId: string) {
    if (this.isAudioPlaying) {
      // Si ya hay un audio reproduciéndose, no hagas nada
      return;
    }
  
    const audio = document.getElementById(audioId) as HTMLAudioElement;
  
    audio.onended = () => {
      // Se llama cuando la reproducción del audio termina
      this.isAudioPlaying = false;
  
    };
  
    this.isAudioPlaying = true;
  
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      this.isAudioPlaying = false;
    }
  }
  constructor() {}

}
