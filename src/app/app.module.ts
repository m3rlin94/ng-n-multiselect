import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuseService } from 'src/app/services/fuse.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { ListitemComponent } from './components/listitem/listitem.component';
import { ChipComponent } from './components/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiselectComponent,
    ListitemComponent,
    ChipComponent
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [FuseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
export * from 'src/app/services/fuse.service';
