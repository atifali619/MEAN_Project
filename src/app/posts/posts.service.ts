import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  posts: Post[] = [];

  getPosts() {
    return this.posts;
  }

  setPosts(toPost: Post) {
    const post = {
      title: toPost.title,
      content: toPost.content,
    };
    this.posts.push(post);
  }
}
