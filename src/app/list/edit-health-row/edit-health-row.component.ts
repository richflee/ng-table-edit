import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-health-row',
  templateUrl: './edit-health-row.component.html',
  styleUrls: ['./edit-health-row.component.css']
})
export class EditHealthRowComponent implements OnInit {

  @Input() item: object;

  constructor() { }

  ngOnInit() {
  }

}
