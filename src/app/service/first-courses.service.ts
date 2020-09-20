import { Injectable } from '@angular/core';
import {baseUrl} from 'src/app/config/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

import { map, filter } from 'rxjs/operators';
import { FirstCourses } from '../models/first-courses';
import { ImageFirst } from '../models/image-first';

@Injectable({
  providedIn: 'root'
})
export class FirstCoursesService {

 
  apiUrl=baseUrl+'/firstCourses';
  apiImage=baseUrl+'/imageFirst';

  coms:FirstCourses[]=[];

  constructor(private http:HttpClient) { }

  get(id) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  getFirstCourses(): Observable<FirstCourses[]> {
    return this.http.get<FirstCourses[]>(this.apiUrl).pipe(
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
  addFirstCourses(data):Observable<FirstCourses>
  {
    data.date=new Date();

    return this.http.post<FirstCourses>(this.apiUrl,data);

   
  }

  updateFirstCourses(id,data): Observable<any> {
    return this.http.put<FirstCourses>(this.apiUrl + '/' + id,data)
  }

  

  removeFirstCourses(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }




  getImage(id) {
    return this.http.get(this.apiImage + '/' + id);
  }

  getCoursesImage(): Observable<ImageFirst[]> {
    return this.http.get<ImageFirst[]>(this.apiImage).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }
  addCoursesImage(data):Observable<ImageFirst>
  {
    data.date=new Date();

    return this.http.post<ImageFirst>(this.apiImage,data);

   
  }

  updateCoursesImage(id,data): Observable<any> {
    return this.http.put<ImageFirst>(this.apiImage + '/' + id,data)
  }

  

  removeCoursesImage(id:string): Observable<any>
  {
    return this.http.delete(this.apiImage + '/' + id)
  }


  uploadImage(image) {
    const data = new FormData()
    data.append('image', image)
    return this.http.post(this.apiImage + '/upload', data)
  }


}
