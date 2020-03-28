import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/models/Option';
import { EmitType } from 'src/app/models/EmitOption';
@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  @Input() option: Option;
  @Input() index: number;
  @Output() toggleOption: EventEmitter<EmitType> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggle = (option: Option): void => {
    this.toggleOption.emit({ index: this.index, option });
  };
}
