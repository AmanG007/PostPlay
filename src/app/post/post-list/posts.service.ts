import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post [] = [];

  getPost() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const posts: Post = {title: title, content: content};
    this.posts.push(posts);
  }

  constructor() { }
}
