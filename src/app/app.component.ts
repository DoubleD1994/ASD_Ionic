import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { CameraPage } from '../pages/camera/camera';
import { CalendarPage } from '../pages/calendar/calendar';
import { BrightnessPage } from '../pages/brightness/brightness';
import { FlashlightPage } from '../pages/flashlight/flashlight';
import { VibrationPage } from '../pages/vibration/vibration';
import { ScreenOrientationPage }  from '../pages/screen-orientation/screen-orientation';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SocialSharingPage } from '../pages/social-sharing/social-sharing';
import { ScreenshotPage } from '../pages/screenshot/screenshot';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'Camera', component: CameraPage },
      { title: 'Calendar', component: CalendarPage },
      { title: 'Brightness', component: BrightnessPage },
      { title: 'Flashlight', component: FlashlightPage },
      { title: 'Vibration', component: VibrationPage },
      { title: 'Screen Orientation', component: ScreenOrientationPage },
      { title: 'Notifications', component: NotificationsPage },
      { title: 'Social Sharing', component: SocialSharingPage },
      { title: 'Screenshot', component: ScreenshotPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

