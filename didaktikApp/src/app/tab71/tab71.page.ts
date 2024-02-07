import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab71',
  templateUrl: './tab71.page.html',
  styleUrls: ['./tab71.page.scss'],
})
export class Tab71Page implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: any; // Referencia al elemento de video

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  hurrengoaButtonClicked() {
    // Detener la reproducción del video
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.pause();
    }

    // Navegar a la siguiente página
    this.navCtrl.navigateForward('/tabs/tab72');
  }
}
