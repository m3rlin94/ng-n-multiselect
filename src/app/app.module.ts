import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { OptionslistComponent } from './components/optionslist/optionslist.component';
import { ListitemComponent } from './components/listitem/listitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiselectComponent,
    OptionslistComponent,
    ListitemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
