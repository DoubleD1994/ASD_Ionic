import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  pushNotification(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Ionic App Says: ' + this.message
    });
  }

}
