import { Injectable } from '@angular/core';
import { Fun } from '../models/fun';
import { baseUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FunService {

  apiUrl=baseUrl+'/funs';

  coms:Fun[]=[];

  constructor(private http:HttpClient) { }

  getFun():Observable<Fun[]>
  {
    return this.http.get<Fun[]>(this.apiUrl);
  }

  addFun(data):Observable<Fun>
  {

    return this.http.post<Fun>(this.apiUrl,data);

  }

  

}