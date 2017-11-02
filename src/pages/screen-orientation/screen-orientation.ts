import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-screen-orientation',
  templateUrl: 'screen-orientation.html',
})
export class ScreenOrientationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenOrientationPage');
    this.screenOrientation.onChange().subscribe(
      () => {
        alert("Orientation Changed");
      }
    );
  }

  currentOrientation(){
    alert("Current orientation: " + this.screenOrientation.type);
  }

  lockPortraitOrientation(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  lockLandscapeOrientation(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  unlockOrientation(){
    this.screenOrientation.unlock();
  }

}
