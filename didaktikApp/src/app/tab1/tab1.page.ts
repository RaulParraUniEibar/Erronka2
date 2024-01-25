import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

  stopAllAudio() {
    // Detener la reproducción de todos los elementos de audio
    for (let i = 1; i <= 4; i++) {
      const audio = document.getElementById("audio" + i) as HTMLAudioElement;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
    this.isAudioPlaying = false;
  }// ... Otro código ...


  constructor(private navCtrl: NavController) {}

  // Asegúrate de llamar a esta función después de que la vista haya sido inicializada
  ngAfterViewInit() {
    console.log('Button reference:', this.btnLehenengoDesberdintasuna);
  }
  hurrengoaButtonClicked() {
    this.stopAllAudio();
    
    this.navCtrl.navigateForward('/tabs/tab2'); // Ajusta la ruta según tu configuración de enrutamiento
  
  }
  
  
}
