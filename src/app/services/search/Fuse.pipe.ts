import { Pipe, PipeTransform } from '@angular/core';
import { Search } from './Search';
import * as Fuse from 'fuse.js';
import FuseOptions = Fuse.IFuseOptions;
import { Option } from 'src/app/models/Option';

@Pipe({ name: 'fusejs' })
export class FusejsPipe implements PipeTransform {
  constructor(private FusejsService: Search) {}

  transform(
    elements: Array<Option>,
    searchTerms: string,
    options: FuseOptions<Option> = {}
  ) {
    return this.FusejsService.getSearchResult(searchTerms, elements, options);
  }
}
