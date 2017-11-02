import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';


@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  title: string;
  location: string;
  notes: string;
  startDate = new Date();
  endDate = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  showCalendar(){

    this.calendar.createEvent(this.title, this.location, this.notes, new Date(this.startDate), new Date (this.endDate)).then(
      (msg) => { alert("Event Saved") },
      (err) => { alert(err) }
    );
  }

}
