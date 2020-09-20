import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/api';
import { map } from 'rxjs/operators'
import { Subject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = baseUrl + '/login/login'
  registerUrl = baseUrl + '/login/register'
  subject = new Subject();

  constructor(private http: HttpClient) { }

  register(userData) {
    return this.http.post(this.registerUrl, userData)
  }

  login(creds) {
    return this.http.post(this.loginUrl, creds)
      .pipe(
        map(data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.subject.next(this.checkUser());
          return data
        })
      )
  }

  logout() {
    localStorage.removeItem('user');
    this.subject.next(this.checkUser());
  }

  checkUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getCurrentUserStatus() {
    return this.subject.asObservable();
  }



  get(id) {
    return this.http.get(this.loginUrl + '/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.loginUrl).pipe(
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

  updateUsers(id,data): Observable<any> {
    return this.http.put<User>(this.loginUrl + '/' + id,data)
  }

  

  removeUsers(id:string): Observable<any>
  {
    return this.http.delete(this.loginUrl + '/' + id)
  }


}
