import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/app/models/Option';
import { EmitType } from 'src/app/models/EmitOption';
import { FuseService } from 'src/app/services/fuse.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  @Input() data: Option[];
  selectedOptionsList: Option[] = [];
  optionsList: Option[] = [];
  optionsListCopy: Option[] = [];
  searchInput = '';
  searchInputChanged = new Subject<string>();

  constructor(private searchService: FuseService) {
    this.searchInputChanged.pipe(debounceTime(500)).subscribe(this.onSearch);
  }

  ngOnInit(): void {
    this.optionsList = [...this.data];
    this.optionsListCopy = [...this.data];
  }

  replaceAt(array: Option[], index: number, value: Option): Option[] {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }

  toggleOption = (emitOption: EmitType): void => {
    const { option, index } = emitOption;
    const key = this.optionsList[index].key;
    let realIndex: number;
    for (const [i, aOption] of this.optionsListCopy.entries()) {
      if (aOption.key === key) {
        realIndex = i;
        break;
      }
    }
    if (option.isSelected) {
      this.optionsList = [
        ...this.replaceAt(this.optionsList, index, {
          ...option,
          isSelected: false
        })
      ];
      this.optionsListCopy = [
        ...this.replaceAt(this.optionsListCopy, realIndex, {
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
      this.optionsListCopy = [
        ...this.replaceAt(this.optionsListCopy, realIndex, {
          ...option,
          isSelected: true
        })
      ];
      this.selectedOptionsList = [...this.selectedOptionsList, option];
    }
  };

  // Note: This right here is the mother of bottlenecks. Need some optimizations
  onSelectAll = (isSelectAll: boolean): void => {
    if (isSelectAll) {
      const selectedKeys: string[] = [];
      const newlySelectedOptions: Option[] = [];

      for (const aOption of this.optionsList) {
        if (!aOption.isSelected) {
          selectedKeys.push(aOption.key);
          newlySelectedOptions.push({
            ...aOption,
            isSelected: true
          });
        }
      }
      this.selectedOptionsList = [
        ...this.selectedOptionsList,
        ...newlySelectedOptions
      ];
      this.optionsList = [
        ...this.optionsList.map(aOption => {
          if (aOption.isSelected) {
            return aOption;
          } else {
            return {
              ...aOption,
              isSelected: true
            };
          }
        })
      ];
      this.optionsListCopy = [
        ...this.optionsListCopy.map(aOption => {
          if (selectedKeys.includes(aOption.key)) {
            return {
              ...aOption,
              isSelected: true
            };
          } else {
            return aOption;
          }
        })
      ];
    } else {
      const deSelectedKeys: string[] = [];
      const allDeSelectedItems = this.optionsList.map(aOption => {
        deSelectedKeys.push(aOption.key);
        return {
          ...aOption,
          isSelected: false
        };
      });
      this.selectedOptionsList = [
        ...this.selectedOptionsList.filter(aOption => {
          if (!deSelectedKeys.includes(aOption.key)) {
            return aOption;
          }
        })
      ];
      this.optionsListCopy = [
        ...this.optionsListCopy.map(aOption => {
          if (deSelectedKeys.includes(aOption.key)) {
            return {
              ...aOption,
              isSelected: false
            };
          } else {
            return aOption;
          }
        })
      ];

      this.optionsList = [...allDeSelectedItems];
    }
  };

  onSearchInputChanged = (e: EventEmitter): void => {
    this.searchInputChanged.next();
  };

  onSearch = (): void => {
    this.optionsList = [
      ...this.searchService.getSearchResult(
        this.searchInput,
        this.optionsListCopy
      )
    ];
  };

  onClearText = (): void => {
    this.optionsList = [...this.optionsListCopy];
    this.searchInput = '';
  };

  trackByOptionKey = (index: number, option: Option): string => {
    return option.key;
  };
}
