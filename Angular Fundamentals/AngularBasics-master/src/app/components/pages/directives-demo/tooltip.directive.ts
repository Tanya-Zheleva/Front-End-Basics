import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  public tooltip: HTMLElement;

   @Input('appTooltip')
   public tooltipText: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  public onMousEenter(): void {
    this.tooltip = this.renderer.createElement('strong');
    this.tooltip.style.fontSize = '0.6em';
    this.tooltip.style.backgroundColor = 'black';
    this.tooltip.style.color = '#fff';
    this.tooltip.style.textAlign = 'center';
    this.tooltip.style.borderRadius = '15px';
    this.tooltip.style.padding = '10px 15px 10px 15px';
    this.tooltip.style.opacity = '0.3';
    this.tooltip.style.position = 'absolute';

    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipText));
    this.renderer.appendChild(this.element.nativeElement, this.tooltip);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.renderer.removeChild(this.element.nativeElement, this.tooltip);
  }
}
