import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../models/blog.model';
import { BlogServiceService } from '../../services/blog-service.service';
import { CommonModule } from '@angular/common';
import { CommentComponent } from "../comment/comment.component";
import { AppHighlightDirective } from '../../directive/app-highlight.directive';

@Component({
    selector: 'app-post-detail',
    standalone: true,
    templateUrl: './post-detail.component.html',
    styleUrl: './post-detail.component.css',
    imports: [CommonModule, CommentComponent, AppHighlightDirective]
})
export class PostDetailComponent {
  postId: number;
  blogPost: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogServiceService) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id');
    this.fetchBlogPost();
  }

  private fetchBlogPost(): void {
    this.blogPost = this.blogService.getBlogPostById(this.postId);
  }
}
