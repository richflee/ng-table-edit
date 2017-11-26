import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.css']
})
export class ListResultsComponent implements OnInit {

  public bulkEditModes: Array<object>;
  public results: Array<object>;
  public selectedEditMode: object;

  constructor() {

    this.bulkEditModes = [
      { name: undefined },
      { name: 'Edit price' },
      { name: 'Edit health' }
    ];

    this.selectedEditMode = this.bulkEditModes[0];

    this.results = [
      { name: 'Item1', price: 10000, age: 112, health: 62 },
      { name: 'Item2', price: 11000, age: 102, health: 12 },
      { name: 'Item3', price: 50999, age: 12, health: 34 }
    ];
  }

  ngOnInit() {
  }

  onEditModeChange(mode: { name: string }): void {
    this.selectedEditMode = mode;
  }

}
