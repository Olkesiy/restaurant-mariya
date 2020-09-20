import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl=baseUrl+'/cards';

  coms:Card[]=[];

  constructor(private http:HttpClient) { }

  getCard():Observable<Card[]>
  {
    return this.http.get<Card[]>(this.apiUrl);
  }

  addCard(data):Observable<Card>
  {

    return this.http.post<Card>(this.apiUrl,data);

  }

  

  removeCard(id:number)
  {
    let index=-1

    for(let i=0;i<this.coms.length;i++)
    {
      if(this.coms[i].id===id)
      {
        index=i
        break;
      }
    }

   this.coms.splice(index,1)
  }
}
