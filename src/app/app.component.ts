import { Component } from '@angular/core';
import { Option } from 'src/app/models/Option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  optionsList: Option[] = [];

  constructor() {
    for (let i = 1; i < 100; i++) {
      this.optionsList.push({
        key: i.toString(),
        value: i.toString()
      });
    }
  }
}
