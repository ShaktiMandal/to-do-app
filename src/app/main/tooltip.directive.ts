import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {


  toolTipElement: any;

  constructor(private elementRef: ElementRef, private render: Renderer2) {
   }

   @HostListener('mouseover') onMouseOver() {
    //  this.elementRef.nativeElement
    this.toolTipElement = this.render.createElement('div');
    this.render.addClass(this.toolTipElement, "tooltip");
     const h1 = document.createElement('h1');
     h1.textContent = "Edit your task";
     this.render.appendChild(this.toolTipElement, h1);

     this.render.appendChild(document.body, this.toolTipElement);

    //  this.render.setStyle(this.toolTipElement, "top", "-10px");
    //  this.render.setStyle(this.toolTipElement, "left", "50px")

   }

   @HostListener('mouseout') onMouseOut() {
    // this.elementRef.nativeElement.style.color = "white";
    if(this.toolTipElement)
    {
      this.render.removeChild(document.body, this.toolTipElement);
      this.render.removeClass(this.toolTipElement, "tooltip");
      this.toolTipElement = null;
    }
  }
}
