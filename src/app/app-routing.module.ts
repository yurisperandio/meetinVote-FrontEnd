import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormComponent } from '../app/person/person-form/person-form.component';
import { PersonListComponent } from '../app/person/person-list/person-list.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { ItemFormComponent } from './item/item-form/item-form.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';

const routes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: 'addPerson', component: PersonFormComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'editItem/:id', component: EditItemComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'addItem', component: ItemFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
