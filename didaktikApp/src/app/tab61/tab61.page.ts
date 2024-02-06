import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab61',
  templateUrl: './tab61.page.html',
  styleUrls: ['./tab61.page.scss'],
})
export class Tab61Page implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  hurrengoaButtonClicked() {
    // Detener todos los audios antes de navegar a la siguiente página
    this.navCtrl.navigateForward('/tabs/tab62'); // Ajusta la ruta según tu configuración de enrutamiento
  }
}
