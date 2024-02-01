import { Component, OnInit,ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  ngOnInit() {
    const speakerElement = document.querySelector('.speaker');
    let index = 0;
    if (speakerElement) {
      speakerElement.textContent = 'Olga 💬';
    }
  }

  revealText() {
    const dialogElement = document.getElementById('dialog5');
    const textToReveal = '1912ko abuztuaren 10ean...';
    let index = 0;
  
    const reveal = () => {
      if (dialogElement) {
        dialogElement.textContent = textToReveal.slice(0, index);
        index++;
  
        if (index <= textToReveal.length) {
          setTimeout(reveal, 100); // Ajusta el tiempo para controlar la velocidad
        }
      }
    };
  
    reveal();
  }
  
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
  
      if (audioId === '1Audio') {
        this.LehenengoAudioaPlayed = true;
      }
    };
  
    this.isAudioPlaying = true;
  
    if (audio.paused) {
      audio.play();
      this.revealText(); // Llamar a revealText después de iniciar la reproducción del audio
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
    this.navCtrl.navigateForward('/tabs/tab42'); // Ajusta la ruta según tu configuración de enrutamiento
  }



}
