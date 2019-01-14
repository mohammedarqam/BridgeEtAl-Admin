import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';


@IonicPage()
@Component({
  selector: 'page-all-users',
  templateUrl: 'all-users.html',
})
export class AllUsersPage {
  users : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public db : AngularFirestore,
  public navParams: NavParams
  ) {
    this.getAllUsers();
  }

  getAllUsers(){
    this.db.collection("Users").snapshotChanges().subscribe((querySnapshot) => {
      this.users = [];
      querySnapshot.forEach((doc) => {
        var temp : any = doc.payload.doc.data();
        temp.id = doc.payload.doc.id;
        this.users.push(temp);
      });
  });
  }

}
