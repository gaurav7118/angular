import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {URL} from '../config'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }
  getUser(id: number): Observable<any> {
    return this.http.get(`${URL.baseUrl}/${id}`);
 }
 createUser(user: Object): Observable<Object> {
  return this.http.post(`${URL.baseUrl}`, user);
}
updateUser(id: number, value: any): Observable<Object> {
  return this.http.put(`${URL.baseUrl}/${id}`, value);
}
deleteUser(id: number): Observable<any> {
  return this.http.delete(`${URL.baseUrl}/${id}`, { responseType: 'text' });
}
getUsersList(): Observable<any> {
  return this.http.get(`${URL.baseUrl}`);
}
}