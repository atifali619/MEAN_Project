import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  constructor(private fb: FormBuilder, private postsService: PostsService) {}

  ngOnInit(): void {}

  postForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  onAddPost(postFormData: any, formDirective: FormGroupDirective) {
    if (this.postForm.invalid) return;

    this.postsService.addPost(
      postFormData.value.title,
      postFormData.value.content
    );
    formDirective.resetForm();
    this.postForm.reset();
  }
}
