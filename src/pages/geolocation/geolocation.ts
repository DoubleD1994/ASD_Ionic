import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
    this.loadMap();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(0, 0);

    let mapOptions= {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  showPosition(){
    this.geolocation.getCurrentPosition().then((position) =>{

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions= {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var marker = new google.maps.Marker({position: latLng,map: this.map, animation: google.maps.Animation.DROP});


    }, (err) => {
      console.log(err);
    });
  }

}
