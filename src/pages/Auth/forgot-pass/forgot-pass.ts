import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase'; 

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {

  mail : string;

  constructor(
  public navCtrl: NavController, 
  public db : AngularFirestore,
  public navParams: NavParams
  ) {
  }



  gtLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  checkData(){

  }

}
