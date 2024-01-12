import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { authGuardGuard } from './auth/auth-guard.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'posts', component: PostListComponent, canActivate: [authGuardGuard] },
    { path: 'post/:id', component: PostDetailComponent, canActivate: [authGuardGuard] },
    { path: 'add-post', component: AddPostComponent, canActivate: [authGuardGuard] },
    { path: 'register', component: RegisterComponent },
    {path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '/register' },
  ];
  
