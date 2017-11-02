import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

  turnOnLight(){
    this.flashlight.switchOn();
  }

  turnOffLight(){
    this.flashlight.switchOff();
  }

}
