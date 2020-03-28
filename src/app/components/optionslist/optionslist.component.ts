import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/app/models/Option';

@Component({
  selector: 'app-optionslist',
  templateUrl: './optionslist.component.html',
  styleUrls: ['./optionslist.component.scss']
})
export class OptionslistComponent implements OnInit {
  @Input() optionsList: Option[];
  selectAll: Option = {
    key: 'select-all',
    value: 'Select All'
  };
  selectNone: Option = {
    key: 'select-none',
    value: 'Select None'
  };
  constructor() {}

  ngOnInit(): void {}
}
