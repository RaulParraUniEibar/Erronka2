import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  
  constructor(private navCtrl: NavController) { }
  completed: boolean = false;

  ngOnInit() {
    window.addEventListener('message', this.handleMessage.bind(this), false);
  }

  handleMessage(event: MessageEvent) {
    if (event.data === 'sopa-completada') {
      console.log('Mensaje recibido:', event.data);
      this.completed = true;
    }
  }

  hurrengoaButtonClicked() {
    this.navCtrl.navigateForward('/tabs/tab71');
  }

}
