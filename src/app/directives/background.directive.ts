import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input('appBackground') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') background: string | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.background = this.defaultColor;
    // console.log(this.element);
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.background = this.hoverColor;
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'red');
    // this.renderer.addClass(nativeElement, 'white-text');
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.background = this.defaultColor;
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    // this.renderer.removeClass(nativeElement, 'white-text');
  }

  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  //   console.log(event);
  // }
}
