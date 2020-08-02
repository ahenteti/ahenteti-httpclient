import { Directive, ElementRef } from '@angular/core';
declare var jQuery: any;

@Directive({ selector: '[resizable]' })
export class ResizableDirective {
  constructor(elementRef: ElementRef) {
    const element = elementRef.nativeElement;
    console.log(element);
    const jQueryResizableHandles = [];
    if (element.getAttribute('top') !== null) jQueryResizableHandles.push('n');
    if (element.getAttribute('right') !== null) jQueryResizableHandles.push('e');
    if (element.getAttribute('bottom') !== null) jQueryResizableHandles.push('s');
    if (element.getAttribute('left') !== null) jQueryResizableHandles.push('w');
    if (element.getAttribute('top') !== null && element.getAttribute('right') !== null) jQueryResizableHandles.push('ne');
    if (element.getAttribute('bottom') !== null && element.getAttribute('right') !== null) jQueryResizableHandles.push('se');
    if (element.getAttribute('bottom') !== null && element.getAttribute('left') !== null) jQueryResizableHandles.push('sw');
    if (element.getAttribute('top') !== null && element.getAttribute('left') !== null) jQueryResizableHandles.push('nw');
    jQuery(element).resizable({
      handles: jQueryResizableHandles.join(', '),
    });
  }
}
