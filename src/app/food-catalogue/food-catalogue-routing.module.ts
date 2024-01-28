import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCatalogueComponent } from './food-catalogue.component';

// :id is the value sent along with router called from some other component
const routes: Routes = [
  { path: 'food-catalogue/:id', component: FoodCatalogueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodCatalogueRoutingModule { }
