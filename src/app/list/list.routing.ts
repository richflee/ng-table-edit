import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { ListResultsComponent } from './list-results/list-results.component';
import { ListEditPriceComponent } from './list-edit-price/list-edit-price.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        children: [
            { path: '', component: ListResultsComponent },
            { path: 'bulk-edit-price', component: ListEditPriceComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ListRoutingModule { }

