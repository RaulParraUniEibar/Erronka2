import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab45',
  templateUrl: './tab45.page.html',
  styleUrls: ['./tab45.page.scss'],
})
export class Tab45Page {


  isAudioPlaying: boolean = false;
  LehenengoAudioaPlayed: boolean = false;

  constructor(private navCtrl : NavController) {}

  playAudio(audioId: string) {
    if (this.isAudioPlaying) {
      // Si ya hay un audio reproduciéndose, deténlo
      //this.stopAllAudio();
      return;
    }

    const audio = document.getElementById(audioId) as HTMLAudioElement;

    audio.onended = () => {
      // Se llama cuando la reproducción del audio termina
      this.isAudioPlaying = false;

      if (audioId === '5Audio') {
        this.LehenengoAudioaPlayed = true;
      }
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
    // Detener todos los audios
    const allAudios = document.querySelectorAll('audio') as NodeListOf<HTMLAudioElement>;
    allAudios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });

    this.isAudioPlaying = false;
  }

  hurrengoaButtonClicked() {
    // Detener todos los audios antes de navegar a la siguiente página
    this.stopAllAudio();
    this.navCtrl.navigateForward('/tabs/tab5'); // Ajusta la ruta según tu configuración de enrutamiento
  }

}
