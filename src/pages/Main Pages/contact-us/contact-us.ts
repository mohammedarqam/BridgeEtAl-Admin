import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';


@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  responses : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public db : AngularFirestore,
  public navParams: NavParams
  ) {
    this.getAllUsers();
  }

  getAllUsers(){
    this.db.collection("ContactUs").snapshotChanges().subscribe((querySnapshot) => {
      this.responses = [];
      querySnapshot.forEach((doc) => {
        var temp : any = doc.payload.doc.data();
        temp.id = doc.payload.doc.id;
        this.responses.push(temp);
      });
  });
  }
}
