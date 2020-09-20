import { Injectable } from '@angular/core';
import { ImageHall } from '../models/image-hall';
import { baseUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageHallService {

  apiUrl=baseUrl+'/hallPhotho';

  coms:ImageHall[]=[];

  constructor(private http:HttpClient) { }

  getImages(): Observable<ImageHall[]> {
    return this.http.get<ImageHall[]>(this.apiUrl).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )}

  addImages(data):Observable<ImageHall>
  {
    

    return this.http.post<ImageHall>(this.apiUrl,data);

   
  }

  updateImages(id,data): Observable<any> {
    return this.http.put<ImageHall>(this.apiUrl + '/' + id,data)
  }

  uploadImage(image) {
    const data = new FormData()
    data.append('image', image)
    return this.http.post(this.apiUrl + '/upload', data)
  }

  

  removeImages(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }

}
