import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-progress-bar',
  templateUrl: 'progress-bar.html',
})
export class ProgressBarPage {
  @Input('progress') progress;
 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressBarPage');
  }

}
