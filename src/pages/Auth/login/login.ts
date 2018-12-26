import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mail: string;
  pass: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFirestore,
  ) {
    
  }


  gtFP() {
    this.navCtrl.setRoot(ForgotPassPage)
  }

  checkData() {

  }

}
