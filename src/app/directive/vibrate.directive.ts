import { Directive, ElementRef, Input } from '@angular/core';
import { run } from 'src/domain/tool/animation';

@Directive({
  selector: '[vibrate]'
})
export class VibrateDirective {
    last: boolean;
    @Input() set vibrate(isVibrate: boolean) {
        if (!this.last && isVibrate) {
            this.last = isVibrate;
            run(this.el.nativeElement, 'rubberBand');
        } else if (!isVibrate) {
            this.last = undefined;
        }
    } ;

    constructor(private el: ElementRef) {
    }
}