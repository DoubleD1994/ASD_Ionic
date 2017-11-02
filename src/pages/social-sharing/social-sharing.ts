import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-social-sharing',
  templateUrl: 'social-sharing.html',
})
export class SocialSharingPage {

  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialSharingPage');
  }

  sheetSocialSharing(){
    this.socialSharing.share(this.message, " ", " ", " ").then(() => {

      }).catch(() => {

      });
  }

}
