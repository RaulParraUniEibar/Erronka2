import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab31',
  templateUrl: './tab31.page.html',
  styleUrls: ['./tab31.page.scss'],
})
export class Tab31Page implements OnInit {

  constructor(private navCtrl: NavController) { }
  completed: boolean = false;

  ngOnInit() {
    window.addEventListener('message', this.handleMessage.bind(this), false);
  }

  handleMessage(event: MessageEvent) {
    if (event.data === 'irudiak-hitzekin') {
      console.log('Mensaje recibido:', event.data);
      this.completed = true;
    }
  }

  hurrengoaButtonClicked() {
    this.navCtrl.navigateForward('/tabs/tab4');
  }
  
}
