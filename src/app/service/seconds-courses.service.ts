import { Injectable } from '@angular/core';
import {baseUrl} from 'src/app/config/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

import { map, filter } from 'rxjs/operators';
import { SecondsCourses } from '../models/seconds-courses';
import { ImageSeconds } from '../models/image-seconds';

@Injectable({
  providedIn: 'root'
})
export class SecondsCoursesService {

  apiUrl=baseUrl+'/secondsCourses';
  apiImage=baseUrl+'/imageSeconds';

  coms:SecondsCourses[]=[];

  constructor(private http:HttpClient) { }

  getSeconds(id) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  getSecondsCourses(): Observable<SecondsCourses[]> {
    return this.http.get<SecondsCourses[]>(this.apiUrl).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }
  addSecondsCourses(data):Observable<SecondsCourses>
  {
    data.date=new Date();

    return this.http.post<SecondsCourses>(this.apiUrl,data);

   
  }

  updateSecondsCourses(id,data): Observable<any> {
    return this.http.put<SecondsCourses>(this.apiUrl + '/' + id,data)
  }

  

  removeSecondsCourses(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }



  getImage(id) {
    return this.http.get(this.apiImage + '/' + id);
  }

  getSecondsImage(): Observable<ImageSeconds[]> {
    return this.http.get<ImageSeconds[]>(this.apiImage).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }
  addSecondsImage(data):Observable<ImageSeconds>
  {
    data.date=new Date();

    return this.http.post<ImageSeconds>(this.apiImage,data);

   
  }

  updateSecondsImage(id,data): Observable<any> {
    return this.http.put<ImageSeconds>(this.apiImage + '/' + id,data)
  }

  

  removeSecondsImage(id:string): Observable<any>
  {
    return this.http.delete(this.apiImage + '/' + id)
  }


  uploadImage(image) {
    const data = new FormData()
    data.append('image', image)
    return this.http.post(this.apiImage + '/upload', data)
  }

}
