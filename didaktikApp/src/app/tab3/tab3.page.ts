import { Component,ViewChild } from '@angular/core';
import { IonButton, PopoverController  } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MiPopoverComponent } from './mi-popover.component';  // Ajusta la ruta según la ubicación real de tu componente


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  audioArrantzaleMuseoaPlayed: boolean = false;
  isAudioPlaying: boolean = false;

  constructor(private router: Router, private navCtrl: NavController, public popoverController: PopoverController) { }

  @ViewChild('btnLehenengoDesberdintasuna', { static: false }) btnLehenengoDesberdintasuna: IonButton | undefined;

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

      if (audioId === 'ArrantzaleMuseoa') {
        this.audioArrantzaleMuseoaPlayed = true;
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
    this.navCtrl.navigateForward('/tabs/tab4'); // Ajusta la ruta según tu configuración de enrutamiento
  }

  async presentPopover() {
    this.stopAllAudio();
    const popover = await this.popoverController.create({
      component: MiPopoverComponent,
      componentProps: {
        content: "Arrantzale museoak euskal arrantzaleen bizitza, lana eta arrantza erakusten du, adibidez, ontziak, arrantzaleen bizitzaren eta ohituren deskribapena… Museoko areto batean, Ertzilla Dorrearen historia azaltzen da. Dorrea XV. mendearen amaieran eraiki zen eta La Araucana poemaren egilea izan zen Alonso de Ertzilla, dorre horretan bizi zen familiako kide batena. Urteak zehar obrak egiten joan dira, gehienbat estalkia konpontzeko eta guneak aprobetxatzeko. Orain dela gutxi, eraikina berriz zaharberritu da, hasierako itxura berreskuratzeko.",
        gif: "../../assets/img/pulpo.gif"
      },
      translucent: true,
      animated: true,
      cssClass: 'custom-popover' // Agrega la clase personalizada aquí
    });
    
    return await popover.present();
  }
}