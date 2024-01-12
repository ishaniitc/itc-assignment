import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isAuthenticated = false;

  constructor(private authService: AuthServiceService, private router: Router) {}

  onLogin(): void {
    this.isAuthenticated = this.authService.loginUser(this.username, this.password);
    console.log('onlgoin'+this.isAuthenticated);
    if (this.isAuthenticated) {
      this.router.navigate(['/posts']);
    } else {
      alert('Login failed. Invalid username or password.');
    }
  }

}
