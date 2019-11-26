import {Directive, ElementRef} from '@angular/core';
import {Shakespeare} from 'shakespeare-data/lib/shakespeare';

@Directive({
    selector: '[appChangetext]'
})
export class ChangetextDirective {
    shakespeare = new Shakespeare();
    sonnets = this.shakespeare.sonnets.all();

    constructor(private element: ElementRef) {
    }

    clicked() {
        this.element.nativeElement.innerText = this.shakespeare.sonnets.random().lines.join(' ');
    }
}
