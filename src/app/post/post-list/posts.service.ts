import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post [] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}
 
  getPost() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
      });
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const posts: Post = { id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', posts)
      .subscribe((resopinceData) => {
        console.log(resopinceData.message);
        this.posts.push(posts);
        this.postUpdated.next([...this.posts]);
      });
  }
}
