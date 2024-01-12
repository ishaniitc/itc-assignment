import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  standalone: true
})
export class AppHighlightDirective {

  // @Input() appHighlight: string; 

   constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(el.nativeElement, 'app-highlight');
  }
}
