import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab62',
  templateUrl: './tab62.page.html',
  styleUrls: ['./tab62.page.scss'],
})
export class Tab62Page {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    setInterval(() => {
      this.cambiarImagenes();
    }, 5000);
  }

cambiarImagenes() {
  var imagenes = document.querySelectorAll('.carousel img');
  if (imagenes.length > 0) {
    var primeraImagen = imagenes[0];
    var ultimaImagen = imagenes[imagenes.length - 1];

    // Mueve la primera imagen al final del carrusel
    if (primeraImagen && primeraImagen.parentNode) {
      primeraImagen.parentNode.appendChild(primeraImagen.cloneNode(true));
      primeraImagen.parentNode.removeChild(primeraImagen);
    }
  }
}

  hurrengoaButtonClicked() {
    // Detener todos los audios antes de navegar a la siguiente página
    this.navCtrl.navigateForward('/tabs/tab6'); // Ajusta la ruta según tu configuración de enrutamiento
  }
}