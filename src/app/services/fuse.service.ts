// import * as Fuse from 'fuse.js';
import { Injectable } from '@angular/core';
import { Option } from 'src/app/models/Option';
import FuzzySearch from 'fuzzy-search';

@Injectable({
  providedIn: 'root'
})
export class FuseService {
  constructor() {}

  options = {
    caseSensitive: false
  };

  keys = ['value'];

  getSearchResult = (
    searchInput: string,
    data: Option[],
    keys?: string[]
  ): any => {
    if (keys) {
      this.keys = { ...keys };
    }
    const search = new FuzzySearch(data, this.keys, this.options);
    return search.search(searchInput);
  };
}
