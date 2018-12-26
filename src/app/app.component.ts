import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/Auth/login/login';
import { DashboardPage } from '../pages/Main Pages/dashboard/dashboard';
import { ForgotPassPage } from '../pages/Auth/forgot-pass/forgot-pass';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { SubscriptionsPage } from '../pages/subscriptions/subscriptions';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SubscriptionsPage;

  activePage: any;

  pages: Array<{ title: string, component: any, icon: any, color: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage,icon : "md-home",color:"secondary" },
      { title: 'Contact Us', component: ContactUsPage,icon : "md-home",color:"secondary"  },
      { title: 'Subscriptions', component: SubscriptionsPage ,icon : "md-home",color:"secondary" },
    ];
    this.activePage = this.pages[2];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
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


}
