import { Component, ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  paragraphVisible = false;
  showButton: boolean = true;

  audioSanJuanArkuaPlayed: boolean = false;
  audioAriketaPlayed: boolean = false;

  isAudioPlaying: boolean = false;

  @ViewChild('btnLehenengoDesberdintasuna', { static: false }) btnLehenengoDesberdintasuna: IonButton | undefined;

  playAudio(audioId: string) {
    if (this.isAudioPlaying) {
      // Si ya hay un audio reproduciéndose, deténlo
      this.stopAllAudio();
      return;
    }

    const audio = document.getElementById(audioId) as HTMLAudioElement;

    audio.onended = () => {
      // Se llama cuando la reproducción del audio termina
      this.isAudioPlaying = false;

      if (audioId === 'SanJuanArkua') {
        this.audioSanJuanArkuaPlayed = true;
      } else if (audioId === 'Ariketa') {
        this.audioAriketaPlayed = true;
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

  mostrarParrafo() {
    this.paragraphVisible = !this.paragraphVisible;
    this.showButton = false;
  }

  constructor(private router: Router, private navCtrl: NavController) { }

  redirigirAKahoot() {
    // Detener todos los audios antes de redirigir a Kahoot
    this.stopAllAudio();
    window.open('https://create.kahoot.it/share/san-juan-arkua/46a3c0ae-a6fe-4a86-9a6d-8a3f0892912d', '_blank');
  }

  hurrengoaButtonClicked() {
    // Detener todos los audios antes de navegar a la siguiente página
    this.stopAllAudio();
    this.navCtrl.navigateForward('/tabs/tab3'); // Ajusta la ruta según tu configuración de enrutamiento
  }
}
