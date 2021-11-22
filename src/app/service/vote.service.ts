import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vote } from '../model/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient, private router: Router) {

  }


  public findAll(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.apiServerUrl+"/vote/");
  }

  public save(vote: Vote) {
    return this.http.post<Vote>(this.apiServerUrl+"/vote/", vote);
  }

}
