import { Injectable } from '@angular/core';
import {baseUrl} from 'src/app/config/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

import { map, filter } from 'rxjs/operators';
import { Courses } from '../models/courses';
import { ImageFirst } from '../models/image-first';
import { ImageCourses } from '../models/image-courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  apiUrl=baseUrl+'/courses';
  apiImage=baseUrl+'/imageCourses';

  coms:Courses[]=[];

  constructor(private http:HttpClient) { }

  get(id) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.apiUrl).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }
  addCourses(data):Observable<Courses>
  {
    return this.http.post<Courses>(this.apiUrl,data);

   
  }

  updateCourses(id,data): Observable<any> {
    return this.http.put<Courses>(this.apiUrl + '/' + id,data)
  }

  

  removeCourses(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }




  getImage(id) {
    return this.http.get(this.apiImage + '/' + id);
  }

  getCoursesImage(): Observable<ImageCourses[]> {
    return this.http.get<ImageCourses[]>(this.apiImage).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }
  addCoursesImage(data):Observable<ImageCourses>
  {
    data.date=new Date();

    return this.http.post<ImageCourses>(this.apiImage,data);

   
  }

  updateCoursesImage(id,data): Observable<any> {
    return this.http.put<ImageCourses>(this.apiImage + '/' + id,data)
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
