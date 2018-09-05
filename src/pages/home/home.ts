import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { LocalNotifications } from "@ionic-native/local-notifications";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private localNotifications: LocalNotifications
  ) {
    this.scheduleNotification();

  }

  scheduleNotification() {
    this.localNotifications.schedule({
      text: "Delay localNotification",
      trigger: { at: new Date(new Date().getTime() + 3600) },
      led: "FF0000",
      sound: null
    });
  }
}
