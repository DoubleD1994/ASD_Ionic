import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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

import { Vibration } from '@ionic-native/vibration';
import { Flashlight } from '@ionic-native/flashlight';
import { Brightness } from '@ionic-native/brightness';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Calendar } from '@ionic-native/calendar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeolocationPage,
    CameraPage,
    CalendarPage,
    BrightnessPage,
    FlashlightPage,
    VibrationPage,
    ScreenOrientationPage,
    NotificationsPage,
    SocialSharingPage,
    ScreenshotPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeolocationPage,
    CameraPage,
    CalendarPage,
    BrightnessPage,
    FlashlightPage,
    VibrationPage,
    ScreenOrientationPage,
    NotificationsPage,
    SocialSharingPage,
    ScreenshotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    Flashlight,
    Brightness,
    Geolocation,
    Camera,
    Calendar,
    ScreenOrientation,
    LocalNotifications,
    SocialSharing,
    Screenshot
  ]
})
export class AppModule {}
