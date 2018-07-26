import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class EntriesService {

  url: string = 'http://localhost:3000/api/journal-entries/';

  constructor(private http: Http) { }

  getEntries(){
    return this.http.get(this.url).map((res: Response)=>res.json());
  }

  getSingleEntry(id){
    return this.http.get(this.url + id).map((res: Response)=>res.json());
  }

}