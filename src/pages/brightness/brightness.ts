import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';

@Component({
  selector: 'page-brightness',
  templateUrl: 'brightness.html',
})
export class BrightnessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private brightness: Brightness) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrightnessPage');
  }

  highBrightness(){
    let brightnessValue: number = 0.8;
    this.brightness.setBrightness(brightnessValue);
  }

  mediumBrightness(){
    let brightnessValue: number = 0.5;
    this.brightness.setBrightness(brightnessValue);
  }

  lowBrightness(){
    let brightnessValue: number = 0.2;
    this.brightness.setBrightness(brightnessValue);
  }

}
