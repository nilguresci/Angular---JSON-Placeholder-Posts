import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  getPost(id: number):Observable<Post>{
    return this.http.get<Post>(`${this.postUrl}/${id}`);
  }
}
