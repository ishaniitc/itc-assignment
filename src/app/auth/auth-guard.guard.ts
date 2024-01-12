import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
  

export const authGuardGuard: CanActivateFn = (route, state) => {
  if (inject(AuthServiceService).isAuthenticate()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
