import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { BlogServiceService } from '../../services/blog-service.service';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogServiceService, private auth: AuthServiceService, private router:Router) {}

  ngOnInit(): void {
    this.fetchBlogPosts();
  }

  private fetchBlogPosts(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }
  // toggleAuthentication(): void {
  //   this.auth.toggleAuthentication();
  // }


 
  navigateToPostDetails(post: BlogPost): void {
    this.router.navigate(['/post/'+post.id]);
  }
}
