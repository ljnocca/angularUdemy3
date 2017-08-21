import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showingText = false;
  logs = [];

  showText(){
    this.showingText = !this.showingText;
    this.logs.push(new Date());
  }

}
