import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.css']
})
export class ListResultsComponent implements OnInit {

  public bulkEditModes: Array<object>;
  public results: Array<object>;
  public parentResults: Array<object>;
  public selectedEditMode: object;
  public selectedItems: Array<object>;

  constructor() {

    this.selectedItems = [];

    this.bulkEditModes = [
      { name: undefined },
      { name: 'Edit price' },
      { name: 'Edit health' }
    ];

    this.selectedEditMode = this.bulkEditModes[0];

    this.parentResults = [
      { id: '1234', name: 'Item1', price: 10000, age: 112, health: 62 },
      { id: '1235', name: 'Item2', price: 11000, age: 102, health: 12 },
      { id: '1236', name: 'Item3', price: 50999, age: 12, health: 34 }
    ];

    this.results = this.parentResults;
  }

  ngOnInit() {
  }

  handleCheckboxChange(event: any, id: string): void {
    const checked = event.target.checked;

    if (checked) {
      const objIdx = this.parentResults.map((x) => x['id']).indexOf(id);
      this.selectedItems.push(this.results[objIdx]);
    } else {
      const objIdx = this.selectedItems.map((x) => x['id']).indexOf(id);
      this.selectedItems.splice(objIdx, 1);
    }
  }

  onEditModeChange(mode: { name: string }): void {
    this.selectedEditMode = mode;
    this.results = this.selectedItems;
  }

  resetEditMode() {
    this.selectedEditMode = this.bulkEditModes[0];
    this.results = this.parentResults;
    this.selectedItems = [];
  }

  onCancelEditMode() {
    this.resetEditMode();
  }

  onSaveEditMode() {
    this.resetEditMode();
  }

}
