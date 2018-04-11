import { Component,Input } from '@angular/core';


@Component({
  selector: 'progrss-bar',
  templateUrl: 'progrss-bar.html'
})
export class ProgrssBarComponent {

  @Input('progress')progress;

  constructor() {
    console.log('Hello ProgrssBarComponent Component');
    
  }

}
