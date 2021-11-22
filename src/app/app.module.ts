import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from '../app/person/person-list/person-list.component';
import { PersonService } from './service/person.service';
import { PersonFormComponent } from '../app/person/person-form/person-form.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { ItemService } from './service/item.service';
import { ItemFormComponent } from './item/item-form/item-form.component';
import { ItemListComponent } from '../app/item/item-list/item-list.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormComponent,
    EditPersonComponent,
    ItemFormComponent,
    ItemListComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
