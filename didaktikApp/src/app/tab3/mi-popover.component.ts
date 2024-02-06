import { Component, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'mi-popover',
  template: `
    <ion-content style="width: 600px;">
      <ion-list style="width: 600px;">
        <ion-item> <!-- Ajusta el ancho según tus necesidades -->
          <img [src]="gif" alt="GIF" class="popover-img">
          <div id="dialog69">
            <!-- El contenido se establecerá aquí -->
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
  styles: [`
    .popover-item {
      display: flex;
      width: 600px; /* Ajusta el ancho según tus necesidades */
    }
    
    .popover-img {
      width: 100px;
      height: 100px;
      margin-right: 10px;
      float: left; /* Mantener la imagen a la izquierda */
    }
    
    #dialog69 {
      flex: 1;
      word-break: break-word; /* Permitir que el texto se rompa en líneas largas */
    }
  `]
})
export class MiPopoverComponent implements OnInit, OnDestroy {
  @Input() content: string = '';
  @Input() gif: string = '';
  private audio: HTMLAudioElement | null = null; // Mantener una referencia al objeto Audio
  
  private isAudioPlaying: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.playAudio();
  }

  ngOnDestroy() {
    this.stopAudio();
  }

  revealText() {
    const dialogElement = this.el.nativeElement.querySelector('#dialog69');
    const textToReveal = this.content;
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

  playAudio() {
    const audioSrc = '../../assets/audioak/Arrantzale-Museoa.mp3';

    if (this.isAudioPlaying) {
      return;
    }

    this.audio = new Audio(audioSrc); // Guardar la referencia al objeto Audio
    this.audio = new Audio(audioSrc);

    this.audio.onended = () => {
      this.isAudioPlaying = false;
    };

    this.isAudioPlaying = true;

    if (this.audio.paused) {
      this.audio.play();
      this.revealText();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isAudioPlaying = false;
    }
  }

  stopAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isAudioPlaying = false;
    }
  }
}
