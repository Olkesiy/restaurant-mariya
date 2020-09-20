import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { baseUrl } from '../config/api';
import { ImageRes } from '../models/image-res';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class ImageService {
  apiUrl=baseUrl+'/restaurantPhotho';

  coms:ImageRes[]=[];

  constructor(private http:HttpClient) { }

  getImages(): Observable<ImageRes[]> {
    return this.http.get<ImageRes[]>(this.apiUrl).pipe(
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )  }



  uploadImage(image) {
    const data = new FormData()
    data.append('image', image)
    return this.http.post(this.apiUrl + '/upload', data)
  }



  addImages(data):Observable<ImageRes>
  {
    

    return this.http.post<ImageRes>(this.apiUrl,data);

   
  }

  updateImages(id,data): Observable<any> {
    return this.http.put<ImageRes>(this.apiUrl + '/' + id,data)
  }

  

  removeImages(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }


}