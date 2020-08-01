import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    jQuery('nav').resizable({
      handles: 'e',
    });
    jQuery('header').resizable({
      handles: 's',
    });
  }
}
