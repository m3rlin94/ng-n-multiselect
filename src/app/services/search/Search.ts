import * as Fuse from 'fuse.js';
import { Option } from 'src/app/models/Option';
import { Injectable } from '@angular/core';

@Injectable()
export class Search {
  options = {
    keys: ['value']
  };

  getSearchResult = (
    searchInput: string,
    data: Option[],
    options?: any
  ): Fuse.FuseResult<Option>[] => {
    if (options) {
      this.options = { ...options };
    }
    const fuse = new Fuse(data, this.options);
    return fuse.search(searchInput);
  };
}
