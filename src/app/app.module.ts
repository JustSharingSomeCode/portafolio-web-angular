import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconsComponent } from './components/icons/icons.component';
import { IconsContainerComponent } from './components/icons-container/icons-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    IconsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
