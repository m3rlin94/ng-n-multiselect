import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuseService } from 'src/app/services/fuse.service';

import { AppComponent } from './app.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { ListitemComponent } from './components/listitem/listitem.component';

@NgModule({
  declarations: [AppComponent, MultiselectComponent, ListitemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [FuseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
export * from 'src/app/services/fuse.service';
