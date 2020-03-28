import { Component } from '@angular/core';
import { Option } from 'src/app/models/Option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  optionsList: Option[] = [
    {
      key: 'one',
      value: 'one'
    },
    {
      key: 'two',
      value: 'two'
    },
    {
      key: 'three',
      value: 'three'
    },
    {
      key: 'four',
      value: 'four'
    },
    {
      key: 'five',
      value: 'five'
    },
    {
      key: 'six',
      value: 'six'
    },
    {
      key: 'seven',
      value: 'seven'
    },

    {
      key: 'eight',
      value: 'eight'
    },
    {
      key: 'nine',
      value: 'nine'
    },
    {
      key: 'ten',
      value: 'ten'
    }
  ];
}
