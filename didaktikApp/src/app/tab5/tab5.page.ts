import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  redirigirAYoutube() {
    // Detener todos los audios antes de redirigir a Kahoot
    window.open('https://www.youtube.com/watch?v=Ha8qGJ5KMKM&feature=youtu.be', '_blank');
  }

  hurrengoaButtonClicked() {
    // Detener todos los audios antes de navegar a la siguiente página
    this.navCtrl.navigateForward('/tabs/tab6'); // Ajusta la ruta según tu configuración de enrutamiento
  }
}
