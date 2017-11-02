import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


@Component({
  selector: 'page-screenshot',
  templateUrl: 'screenshot.html',
})
export class ScreenshotPage {

  filename: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenshotPage');
  }

  takeScreenshot(){
    this.screenshot.save('jpg', 80, this.filename + '.jpg').then();
  }
}
