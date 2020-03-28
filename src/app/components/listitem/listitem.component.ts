import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/app/models/Option';
@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  @Input() option: Option;

  constructor() {}

  ngOnInit(): void {}
}
