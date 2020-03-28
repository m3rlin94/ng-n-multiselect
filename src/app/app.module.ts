import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FusejsPipe } from 'src/app/services/search/Fuse.pipe';
import { Search } from 'src/app/services/search/Search';

import { AppComponent } from './app.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { ListitemComponent } from './components/listitem/listitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiselectComponent,
    ListitemComponent,
    FusejsPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [Search],
  bootstrap: [AppComponent],
  exports: [FusejsPipe]
})
export class AppModule {}
export * from 'src/app/services/search/Search';
export * from 'src/app/services/search/Fuse.pipe';
