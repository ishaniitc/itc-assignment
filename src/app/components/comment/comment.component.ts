import { Component, Input } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import { BlogServiceService } from '../../services/blog-service.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() blogPost: any;

  newComment: any = {}; 

  constructor(private blogService: BlogServiceService) {}

  onSubmit(commentForm: NgForm): void {
    if (commentForm.valid) {
      if (!this.blogPost.comments) {
        this.blogPost.comments = [];
      }
      this.blogPost.comments.push(this.newComment);
      this.newComment = {}; 
      commentForm.resetForm();
    }
  }
}
