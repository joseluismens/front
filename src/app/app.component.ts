import { Component, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
    document.body.setAttribute("style", "background-image: url('../assets/background.jpg');background-repeat: no-repeat;background-size: 100% 100%");


  }



}
