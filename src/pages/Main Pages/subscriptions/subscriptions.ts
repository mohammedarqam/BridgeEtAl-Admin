import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-subscriptions',
  templateUrl: 'subscriptions.html',
})
export class SubscriptionsPage {

  subscribers : Array<any> = [];

  subscribersRef = this.db.collection("Subscriptions");

  constructor(
  public navCtrl: NavController, 
  public db: AngularFirestore,
  public navParams: NavParams
  ) {
    this.getSubscribers();
  }


  getSubscribers(){
    this.subscribersRef.snapshotChanges().subscribe((querySnapshot) => {
      this.subscribers = [];
      querySnapshot.forEach((doc) => {
        var temp : any = doc.payload.doc.data();
        temp.id = doc.payload.doc.id;
        this.subscribers.push(temp);
      });
  });

  }


}
