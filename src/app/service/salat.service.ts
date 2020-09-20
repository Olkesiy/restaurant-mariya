import { Injectable } from '@angular/core';
import {baseUrl} from 'src/app/config/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Salat } from '../models/salat';
import { map, filter } from 'rxjs/operators';
import { ImageSalat } from '../models/image-salat';


@Injectable({
  providedIn: 'root'
})
export class SalatService {

  
  apiUrl=baseUrl+'/salats';
  apiImage=baseUrl+'/imageSalat';

 

  constructor(private http:HttpClient) { }

  get(id) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  getSalats(): Observable<Salat[]> {
    return this.http.get<Salat[]>(this.apiUrl).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )/*.pipe(
      filter((posts, index) => posts.filter(post => post.active))
    )*/
  }
  addSalats(data):Observable<Salat>
  {
    data.date=new Date();

    return this.http.post<Salat>(this.apiUrl,data);

   
  }

  updateSalats(id,data): Observable<any> {
    return this.http.put<Salat>(this.apiUrl + '/' + id,data)
  }

  

  removeSalats(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }





  getImage(id) {
    return this.http.get(this.apiImage + '/' + id);
  }

  getSalatsImage(): Observable<ImageSalat[]> {
    return this.http.get<ImageSalat[]>(this.apiImage).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )/*.pipe(
      filter((posts, index) => posts.filter(post => post.active))
    )*/
  }
  addSalatsImage(data):Observable<ImageSalat>
  {
    //data.date=new Date();

    return this.http.post<ImageSalat>(this.apiImage,data);

   
  }

  updateSalatsImage(id,data): Observable<any> {
    return this.http.put<Salat>(this.apiImage + '/' + id,data)
  }

  

  removeSalatsImage(id:string): Observable<any>
  {
    return this.http.delete(this.apiImage + '/' + id)
  }



  uploadImage(image) {
    const data = new FormData()
    data.append('image', image)
    return this.http.post(this.apiImage + '/upload', data)
  }

}
