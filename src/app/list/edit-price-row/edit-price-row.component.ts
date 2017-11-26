import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-price-row',
  templateUrl: './edit-price-row.component.html',
  styleUrls: ['./edit-price-row.component.css']
})
export class EditPriceRowComponent implements OnInit {

  @Input() item: object;

  constructor() { }

  ngOnInit() {
  }

}
