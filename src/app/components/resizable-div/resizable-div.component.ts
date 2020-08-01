import { Component, Input, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'ah-resizable-div',
  templateUrl: 'resizable-div.component.html',
  styleUrls: ['resizable-div.component.scss'],
})
export class ResizableDivComponent implements OnInit {
  constructor(element: ElementRef) {}

  ngOnInit(): void {
    const jQueryResizableHandles = [];
    if (this.top) jQueryResizableHandles.push('n');
    if (this.right) jQueryResizableHandles.push('e');
    if (this.bottom) jQueryResizableHandles.push('s');
    if (this.right) jQueryResizableHandles.push('w');
    if (this.top && this.right) jQueryResizableHandles.push('ne');
    if (this.bottom && this.right) jQueryResizableHandles.push('se');
    if (this.bottom && this.left) jQueryResizableHandles.push('sw');
    if (this.top && this.left) jQueryResizableHandles.push('nw');
    const jQueryResizableOptions: any = {};
    console.log(jQueryResizableHandles.join(', '));
    jQueryResizableOptions.handles = 'e';
    if (this.minWidthVw) {
      jQueryResizableOptions.minWidth = this.viewportToPixels(this.minWidthVw);
      jQuery('.ng-container').width(this.minWidthVw);
    }
    if (this.maxWidthVw) jQueryResizableOptions.maxWidth = this.viewportToPixels(this.maxWidthVw);
    if (this.minHeightVh) {
      jQueryResizableOptions.minWidth = this.viewportToPixels(this.minHeightVh);
      jQuery('.ng-container').height(this.minHeightVh);
    }
    if (this.maxHeightVh) jQueryResizableOptions.maxWidth = this.viewportToPixels(this.maxHeightVh);

    jQuery('.ng-container').resizable(jQueryResizableOptions);
  }

  @Input('min-width-vw')
  private minWidthVw: string;
  @Input('max-width-vw')
  private maxWidthVw: string;
  @Input('max-height-vh')
  private maxHeightVh: string;
  @Input('min-height-vh')
  private minHeightVh: string;

  private _top: boolean;
  @Input()
  get top() {
    return this._top;
  }
  set top(value: any) {
    this._top = this.getBooleanProperty(value);
  }

  private _right: boolean;
  @Input()
  get right() {
    return this._right;
  }
  set right(value: any) {
    this._right = this.getBooleanProperty(value);
  }

  private _bottom: boolean;
  @Input()
  get bottom() {
    return this._bottom;
  }
  set bottom(value: any) {
    this._bottom = this.getBooleanProperty(value);
  }

  private _left: boolean;
  @Input()
  get left() {
    return this._left;
  }
  set left(value: any) {
    this._left = this.getBooleanProperty(value);
  }

  private getBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  private viewportToPixels(value) {
    // code reference: https://stackoverflow.com/questions/34166341/convert-vh-units-to-px-in-js
    const parts = value.match(/([0-9\.]+)(vh|vw)/);
    const q = Number(parts[1]);
    const side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]];
    return side * (q / 100);
  }
}
