import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import {baseUrl} from 'src/app/config/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl=baseUrl+'/contacts';

  coms:Contact[]=[];

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]>
  {
    return this.http.get<Contact[]>(this.apiUrl).pipe
    (
      map((posts) => {
        return posts.map(post => {
          post.id = post._id
          delete post._id
          return post
        })
      })
    )
  }

  addContacts(data):Observable<Contact>
  {    
    return this.http.post<Contact>(this.apiUrl,data);

  }

  updateContacts(id,data): Observable<any> {
    return this.http.put<Contact>(this.apiUrl + '/' + id,data)
  }


  removeContacts(id:string): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id)
  }

}
