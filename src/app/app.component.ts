import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/Auth/login/login';
import { DashboardPage } from '../pages/Main Pages/dashboard/dashboard';
import { ForgotPassPage } from '../pages/Auth/forgot-pass/forgot-pass';
import { ContactUsPage } from '../pages/Main Pages/contact-us/contact-us';
import { SubscriptionsPage } from '../pages/Main Pages/subscriptions/subscriptions';
import { AllUsersPage } from '../pages/Main Pages/all-users/all-users';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SubscriptionsPage;

  activePage: any;

  pages: Array<{ title: string, component: any, icon: any, color: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public toastCtrl : ToastController,
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, icon: "md-home", color: "secondary" },
      { title: 'Contact Us', component: ContactUsPage, icon: "md-home", color: "secondary" },
      { title: 'Subscriptions', component: SubscriptionsPage, icon: "md-home", color: "secondary" },
      { title: 'All Users', component: AllUsersPage, icon: "md-home", color: "secondary" },
    ];
    this.activePage = this.pages[2];
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     firebase.database().ref("Admin Data").child("Admins").child(user.uid).once('value', itemSnap => {
      //       if (itemSnap.exists()) {
      //         this.rootPage = DashboardPage;
      //       } else {
      //         firebase.auth().signOut().then(() => {
      //           this.rootPage = LoginPage;
      //           this.presentToast("You are not registered a Admin")
      //         })
      //       }
      //     });
      //   }
      // });


      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

}
