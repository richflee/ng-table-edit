import { Injectable } from '@angular/core';

@Injectable()
export class ListItemsService {

  private _itemsForBulkEdit: Array<object>;

  constructor() { }

  public setItemsForBulkEditPrice(items: Array<object>): void {
    this._itemsForBulkEdit = JSON.parse(JSON.stringify(items));
  }

  get itemsForBulkEditPrice(): Array<object> {
    return this._itemsForBulkEdit;
  }
}
