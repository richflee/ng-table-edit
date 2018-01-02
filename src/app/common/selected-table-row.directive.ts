import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[selectedTableRow]'
})
export class SelectedTableRowDirective implements AfterViewInit, OnChanges {

  @Input() selectedTableRow: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['selectedTableRow']['currentValue'] !== null) {
      const cells = this.el.nativeElement.querySelectorAll('td');
      const selected = changes['selectedTableRow']['currentValue'];

      cells.forEach(cell => {
        selected ? this.renderer.addClass(cell, 'selected-table-row') : this.renderer.removeClass(cell, 'selected-table-row');
      });

    }
  }

}
