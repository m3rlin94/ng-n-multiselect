import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/Option';
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  optionsList: Option[] = [
    {
      key: 'one',
      value: 'one',
      isSelected: false
    },
    {
      key: 'two',
      value: 'two',
      isSelected: false
    },
    {
      key: 'three',
      value: 'three',
      isSelected: false
    },
    {
      key: 'four',
      value: 'four',
      isSelected: false
    },
    {
      key: 'five',
      value: 'five',
      isSelected: false
    },
    {
      key: 'six',
      value: 'six',
      isSelected: false
    },
    {
      key: 'seven',
      value: 'seven',
      isSelected: false
    },

    {
      key: 'eight',
      value: 'eight',
      isSelected: false
    },
    {
      key: 'nine',
      value: 'nine',
      isSelected: false
    },
    {
      key: 'ten',
      value: 'ten',
      isSelected: false
    }
  ];
  selectedOptionsList: Option[] = [
    {
      key: 'one',
      value: 'one'
    },
    {
      key: 'two',
      value: 'two'
    }
  ];

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

  toggleOption = (option: Option, index: number): void => {
    if (option.isSelected) {
      this.selectedOptionsList = this.selectedOptionsList.filter(
        aOption => aOption.key !== option.key
      );
    } else {
      this.selectedOptionsList = [...this.selectedOptionsList, option];
      this.optionsList[index].isSelected = true;
    }
  };
}
