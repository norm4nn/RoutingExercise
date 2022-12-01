import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService    {
  
  posts!: Post[];
  
  constructor(private http: HttpClient) { }
  

  getPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: data => this.posts = data,
      error: err => console.log("Wystąpił błąd przy pobieraniu danych z JSON.", err),
    });
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPhotos() {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }

  setPost(titleS: string, bodyS: string) {
    
    const post: Post ={
      userId : 0,
      id : this.posts[this.posts.length - 1].id + 1,
      title : titleS,
      body : bodyS
    }
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }




}
