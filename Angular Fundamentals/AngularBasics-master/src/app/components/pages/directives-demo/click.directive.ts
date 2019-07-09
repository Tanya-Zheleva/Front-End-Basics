import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click') onclick() {
    let currentColor = this.element.nativeElement.style.backgroundColor;

    if (currentColor) {
      this.setColor(null);
    } else {
      this.setColor('green');
    }
  }

  private setColor(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
