import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/app/models/Option';
import { EmitType } from 'src/app/models/EmitOption';
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  @Input() data: Option[];
  selectedOptionsList: Option[] = [];
  selectAllList: Option[] = [];
  optionsList: Option[] = [];

  constructor() {}

  ngOnInit(): void {
    this.optionsList = [...this.data];
    this.selectAllList = [
      ...this.data.map(aOption => ({
        ...aOption,
        isSelected: true
      }))
    ];
  }

  replaceAt(array: Option[], index: number, value: Option): Option[] {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }

  toggleOption = (emitOption: EmitType): void => {
    const { option, index } = emitOption;
    if (option.isSelected) {
      this.optionsList = [
        ...this.replaceAt(this.optionsList, index, {
          ...option,
          isSelected: false
        })
      ];
      this.selectedOptionsList = [
        ...this.selectedOptionsList.filter(
          aOption => aOption.key !== option.key
        )
      ];
    } else {
      this.optionsList = [
        ...this.replaceAt(this.optionsList, index, {
          ...option,
          isSelected: true
        })
      ];
      this.selectedOptionsList = [...this.selectedOptionsList, option];
    }
  };

  onSelectAll = (isSelectAll: boolean): void => {
    if (isSelectAll) {
      this.selectedOptionsList = [...this.selectAllList];
      this.optionsList = [...this.selectAllList];
    } else {
      this.selectedOptionsList = [];
      this.optionsList = [...this.data];
    }
  };

  trackByOptionKey = (index: number, option: Option): string => {
    return option.key;
  };
}
