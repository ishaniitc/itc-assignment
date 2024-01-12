import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

    blogPosts: BlogPost[] = [
    new BlogPost(1, 'Introduction to Angular', 'Angular is a powerful front-end framework...', 'John Doe', new Date('2024-01-04'), []),
    new BlogPost(2, 'Introction to C', 'C is a powerful high level Object Oriented...', 'Umang Goel', new Date('2024-01-14'), []),
  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find((p) => p.id === id);
  }

  addBlogPost(newPost: BlogPost): void {
    newPost.id = this.blogPosts.length + 1;
    this.blogPosts.push(newPost);
  }


}
