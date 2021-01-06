
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'survey';
  question1 =  'what is your age ?';
  log = [];

gotResults(results: number, id: number): void {
  this.log[id] = results;
  console.log(this.log);
}


}
