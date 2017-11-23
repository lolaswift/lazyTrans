import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public translate: TranslateService) {

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("lang changed detected", event);
  });

  }

  translateToEnglish() {
    this.translate.use('en');
  }

  translateToDutch() {
    this.translate.use('dutch');
  }

}
