import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  private offset: number = 10;

  public tooltip: HTMLElement;

  @Input('appTooltip')
  public tooltipText: string;

  @Input()
  public position: string;

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
    // this.tooltip.style.zIndex = '1';
    
    // switch (this.position) {
    //   case 'right':
    //     this.tooltip.style.marginLeft = '7px';
    //     this.tooltip.style.zIndex = '1';
    //     this.tooltip.style.top = '-5px';
    //     this.tooltip.style.left = '105%';
    //     break;
    //     case 'left':   
    //     this.tooltip.style.top = '-10px';
    //     this.tooltip.style.right = '110%;';
    //     break;
    // }

    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipText));
    this.renderer.appendChild(this.element.nativeElement, this.tooltip);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.renderer.removeChild(this.element.nativeElement, this.tooltip);
  }
}
