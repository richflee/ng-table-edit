import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[selectedTableRow]'
})
export class SelectedTableRowDirective implements OnChanges {

  @Input() selectedTableRow: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

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
