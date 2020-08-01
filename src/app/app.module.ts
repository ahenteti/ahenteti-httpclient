import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResizableDivComponent } from './components/resizable-div/resizable-div.component';

@NgModule({
  declarations: [AppComponent, ResizableDivComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
