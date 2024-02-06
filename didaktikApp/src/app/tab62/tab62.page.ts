import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab62',
  templateUrl: './tab62.page.html',
  styleUrls: ['./tab62.page.scss'],
})
export class Tab62Page {

  primerasCincoPasadas: boolean = false;
  imagenesPasadas: number = 0;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    setInterval(() => {
      this.cambiarImagenes();
    }, 7000);
  }

  cambiarImagenes() {
    var imagenes = document.querySelectorAll('.carousel img');
    if (imagenes.length > 0) {
      var primeraImagen = imagenes[0];
      var ultimaImagen = imagenes[imagenes.length - 1];

      if (primeraImagen && primeraImagen.parentNode) {
        primeraImagen.parentNode.appendChild(primeraImagen.cloneNode(true));
        primeraImagen.parentNode.removeChild(primeraImagen);

        this.imagenesPasadas++; // Incrementa el contador de imágenes pasadas

        // Verifica si se han pasado las primeras 5 imágenes y establece la bandera en consecuencia
        if (this.imagenesPasadas >= 5 && !this.primerasCincoPasadas) {
          this.primerasCincoPasadas = true;
        }
      }
    }
  }
  

  hurrengoaButtonClicked() {
    // Detener todos los audios antes de navegar a la siguiente página
    this.navCtrl.navigateForward('/tabs/tab63'); // Ajusta la ruta según tu configuración de enrutamiento
  }
}