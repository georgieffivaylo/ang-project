import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecepiesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailsComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ] },
  { path: 'shopping-list', component: ShopingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
