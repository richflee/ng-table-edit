import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ListRoutingModule } from './list.routing';
import { ListComponent } from './list.component';
import { ListResultsComponent } from './list-results/list-results.component';
import { EditPriceRowComponent } from './edit-price-row/edit-price-row.component';
import { EditHealthRowComponent } from './edit-health-row/edit-health-row.component';
import { ListEditPriceComponent } from './list-edit-price/list-edit-price.component';

import { ListItemsService } from './list-items.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ListRoutingModule
    ],
    declarations: [
        ListComponent,
        ListResultsComponent,
        EditPriceRowComponent,
        EditHealthRowComponent,
        ListEditPriceComponent
    ],
    providers: [
        ListItemsService
    ]
})
export class ListModule { }
