import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BlogServiceService } from '../../services/blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent  {
  newPost: any = {}; 

  constructor(private blogService: BlogServiceService, private router: Router) {}

  onSubmit(): void {
    this.blogService.addBlogPost(this.newPost);
    this.router.navigate(['/posts']);
  }
}
