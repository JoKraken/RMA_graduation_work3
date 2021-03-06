import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  gps;
  viewHistory;

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {

  }

  ionViewWillEnter(){
    this.storage.get('settings').then((val) => {
      let settings = JSON.parse(val);
      this.gps = settings.gps;
      this.viewHistory = settings.viewHistory;
    });
  }

  ionViewWillLeave(){
    this.onclickSettings();
  }

  onclickSettings(){
    let settings = {gps: this.gps, viewHistory: this.viewHistory};
    this.storage.set('settings', JSON.stringify(settings));
  }

}
