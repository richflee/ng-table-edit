import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../list-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-edit-price',
  templateUrl: './list-edit-price.component.html',
  styleUrls: ['./list-edit-price.component.scss']
})
export class ListEditPriceComponent implements OnInit {

  public results: Array<object>;

  constructor(private listItemsService: ListItemsService, private router: Router) {
    this.results = this.listItemsService.itemsForBulkEditPrice;
  }

  ngOnInit() {
  }

  saveEditedItems(): void {
    this.router.navigate(['/list']);
  }

}
