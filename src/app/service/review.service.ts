import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import {baseUrl} from 'src/app/config/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {



  apiUrl=baseUrl+'/reviews';

  coms:Review[]=[];

  constructor(private http:HttpClient) { }

  getReviews():Observable<Review[]>
  {
    return this.http.get<Review[]>(this.apiUrl);
  }

  addReviews(data):Observable<Review>
  {


    
    setInterval(()=>{data.date=new Date()},1);
    
    return this.http.post<Review>(this.apiUrl,data);

    
  }

  
  removeReviews(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }



}
