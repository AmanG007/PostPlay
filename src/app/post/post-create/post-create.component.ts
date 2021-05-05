import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post-list/post.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor() { }
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = { 
      title: form.value.title,
      content: form.value.content 
    };
    this.postCreated.emit(post);
  }



}
