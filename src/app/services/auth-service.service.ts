import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated: boolean = false;
  private userList: User[] = []; 

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }

  saveUserData(user: User): void {
    user.userId = this.userList.length + 1;
    this.userList.push(user);
  }

  getStoredUsers(): User[] {
    return this.userList;
  }

  loginUser(username: string, password: string): boolean {
    this.isAuthenticated = this.userList.some(user => user.username === username && user.password === password);

    if (this.isAuthenticated) {
      this.isAuthenticated = true; 
    }

    return this.isAuthenticated;
  }

}
