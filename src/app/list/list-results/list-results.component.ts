import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ListItemsService } from '../list-items.service';
import { SelectedTableRowDirective } from '../../common/selected-table-row.directive';



@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.css']
})
export class ListResultsComponent implements OnInit {

  public bulkEditModes: Array<object>;
  public results: Array<object>;

  public bulkEditModes$: Observable<Array<object>>;
  public selectedItems: Array<object>;

  constructor(private router: Router, private listItemsService: ListItemsService) {

    this.selectedItems = [];

    this.bulkEditModes = [
      { name: 'Edit price' },
      { name: 'Edit health' }
    ];

    this.results = [
      { id: '1234', name: 'Item1', price: 10000, age: 112, health: 62 },
      { id: '1235', name: 'Item2', price: 11000, age: 102, health: 12 },
      { id: '1236', name: 'Item3', price: 50999, age: 12, health: 34 }
    ];
  }

  ngOnInit() { }

  handleCheckboxChange(event: any, id: string): void {
    const checked = event.target.checked;

    if (checked) {
      const objIdx = this.results.map((x) => x['id']).indexOf(id);
      this.results[objIdx]['selected'] = true;
      this.selectedItems.push(this.results[objIdx]);
    } else {
      const objIdx = this.selectedItems.map((x) => x['id']).indexOf(id);
      const resultsIdx = this.results.map((x) => x['id']).indexOf(id);
      this.results[resultsIdx]['selected'] = false;
      this.selectedItems.splice(objIdx, 1);
    }
  }

  onEditModeChange(event: any = null, mode: { name: string }): void {

    if (event) {
      event.preventDefault();
    }

    this.listItemsService.setItemsForBulkEditPrice(this.selectedItems);
    this.router.navigate(['/list/bulk-edit-price']);
  }

  resetEditMode() {
    this.selectedItems = [];
  }

  onCancelEditMode() {
    this.resetEditMode();
  }

  onSaveEditMode() {
    this.resetEditMode();
  }

}
