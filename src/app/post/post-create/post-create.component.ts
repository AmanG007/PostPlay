import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Post } from '../post-list/post.model';
import { PostsService } from "../post-list/posts.service"
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) { }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost( form.value.title,  form.value.content);
    form.resetForm();  
  }

}
