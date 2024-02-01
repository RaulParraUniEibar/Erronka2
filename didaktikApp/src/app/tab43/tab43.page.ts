import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab43',
  templateUrl: './tab43.page.html',
  styleUrls: ['./tab43.page.scss'],
})
export class Tab43Page {


  ngOnInit() {
    const speakerElement = document.querySelector('.speaker');
    let index = 0;
    if (speakerElement) {
      speakerElement.textContent = 'Olga 💬';
    }
  }

  revealText() {
    const dialogElement = document.getElementById('dialog2');
    const textToReveal = 'Egun horretan eguraldia oso txarra zen eta itsasontziak hondoratu ziren. Gaua zen eta marinelak uretan amaitu zuten, olatuak nondik zetozen jakin gabe.';
    let index = 0;
  
    const reveal = () => {
      if (dialogElement) {
        dialogElement.textContent = textToReveal.slice(0, index);
        index++;
  
        if (index <= textToReveal.length) {
          setTimeout(reveal, 75); // Ajusta el tiempo para controlar la velocidad
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
  
      if (audioId === '3Audio') {
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
    this.navCtrl.navigateForward('/tabs/tab44'); // Ajusta la ruta según tu configuración de enrutamiento
  }


}
