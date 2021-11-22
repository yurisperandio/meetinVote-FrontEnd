import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../model/item';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) {

  }

  public findAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiServerUrl+"/item/");
  }

  public save(item: Item) {
    return this.http.post<Item>(this.apiServerUrl+"/item/", item);
  }

  public updateItem(id: any, itemObj: any): Observable<Item>{
    return this.http.put<Item>(this.apiServerUrl + "item/"+ id, itemObj );
  }

  public updateDescription(id: any, itemObj: any): Observable<Item>{
    return this.http.patch<Item>(this.apiServerUrl + "item/"+ id, itemObj );
  }

  public deleteItem(itemId: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl + "item/" + itemId);
  }
  public findById(itemId: number): Observable<Item>{
    return this.http.get<Item>(this.apiServerUrl+"item/"+itemId);
  }


}
