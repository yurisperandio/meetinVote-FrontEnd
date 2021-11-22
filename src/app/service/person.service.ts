import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient, private router: Router) {

  }


  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiServerUrl+"/person/");
  }

  public save(person: Person) {
    return this.http.post<Person>(this.apiServerUrl+"/person/", person);
  }


  public updatePerson(id: any, personObj: any): Observable<Person>{
    return this.http.put<Person>(this.apiServerUrl + "person/"+ id, personObj );
  }

  public updateCpf(id: any, personObj: any): Observable<Person>{
    return this.http.patch<Person>(this.apiServerUrl + "person/"+ id, personObj );
  }

  public deletePerson(personId: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl + "person/" + personId);
  }
  public findById(personId: number): Observable<Person>{
    return this.http.get<Person>(this.apiServerUrl+"/person/id/"+personId);
  }



}
