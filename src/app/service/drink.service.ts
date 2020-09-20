import { Injectable } from '@angular/core';
import {baseUrl} from 'src/app/config/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

import { map, filter } from 'rxjs/operators';
import { Drink } from '../models/drink';
import { ImageDrink } from '../models/image-drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

 
 
  apiUrl=baseUrl+'/drinks';
  apiImage=baseUrl+'/imageDrinks';

  coms:Drink[]=[];
  coms1:ImageDrink[]=[];

  constructor(private http:HttpClient) { }

  get(id) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.apiUrl).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }
  addDrinks(data):Observable<Drink>
  {
    data.date=new Date();

    return this.http.post<Drink>(this.apiUrl,data);

   
  }

  updateDrinks(id,data): Observable<any> {
    return this.http.put<Drink>(this.apiUrl + '/' + id,data)
  }

  

  removeDrinks(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }


  uploadImage(image) {
    const data = new FormData()
    data.append('image', image)
    return this.http.post(this.apiImage + '/upload', data)
  }

  getImage(id) {
    return this.http.get(this.apiImage + '/' + id);
  }

  getDrinkImage(): Observable<ImageDrink[]> {
    return this.http.get<ImageDrink[]>(this.apiImage).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }
  addDrinkImage(data):Observable<ImageDrink>
  {
    

    return this.http.post<ImageDrink>(this.apiImage,data);

   
  }

  updateDrinkImage(id,data): Observable<any> {
    return this.http.put<ImageDrink>(this.apiImage + '/' + id,data)
  }

  

  removeDrinkImage(id:string): Observable<any>
  {
    return this.http.delete(this.apiImage + '/' + id)
  }

}
