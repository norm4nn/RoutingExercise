import { Component, OnInit } from '@angular/core';
import { ConfigService, Post } from '../config.service';


@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  posts!: Post[];
  constructor(private service: ConfigService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next: data => this.posts = data,
      error: err => console.log("Wystąpił błąd przy pobieraniu danych z JSON.", err),
    });
  }

  setPost() {
    const titleEl = document.getElementById("title")! as HTMLInputElement;
    const bodyEl  = document.getElementById("body")! as HTMLInputElement;

    this.service.setPost(titleEl.value, bodyEl.value).subscribe({
      next: data => this.posts.push(data),
      error: err =>   console.log("Wystąpił błąd przy wysylaniu danych.", err),
    });

    titleEl.value = '';
    bodyEl.value = '';
    
  }

}
