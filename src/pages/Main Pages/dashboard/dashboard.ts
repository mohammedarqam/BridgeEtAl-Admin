import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(
  public navCtrl: NavController, 
  public menuCtrl : MenuController,
  public db : AngularFirestore,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
  }


}
