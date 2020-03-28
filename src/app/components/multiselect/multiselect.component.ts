import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/app/models/Option';
import { EmitType } from 'src/app/models/EmitOption';
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  @Input() optionsList: Option[];
  selectedOptionsList: Option[] = [];

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

  toggleOption = (emitOption: EmitType): void => {
    const { option, index } = emitOption;
    if (option.isSelected) {
      this.optionsList[index].isSelected = false;
      this.selectedOptionsList = [
        ...this.selectedOptionsList.filter(
          aOption => aOption.key !== option.key
        )
      ];
    } else {
      this.optionsList[index].isSelected = true;
      this.selectedOptionsList = [...this.selectedOptionsList, option];
    }
  };

  trackByOptionKey = (index: number, option: Option): string => {
    return option.key;
  };
}
