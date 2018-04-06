import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tracks:any;
  playing: boolean= true;
  currentTrack :any;
  progressInterval:any;

  constructor(public navCtrl: NavController) {
    this.tracks=[
      {title:"hi", artist:'odesza', playing:'false', progress:'0'},
      {title:'hello', artist:'abcd', playing:'false', progress:'0'},
      {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0},
    ]
  this.currentTrack=this.tracks[0];
  }

}
