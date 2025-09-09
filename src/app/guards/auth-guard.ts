import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  try {
    const user = await authService.getUser(); // récupère l'utilisateur connecté
    if (user) {
      return true; // utilisateur connecté, autoriser l'accès
    } else {
      // utilisateur non connecté, rediriger vers onboarding
      return router.createUrlTree(['/onboarding']);
    }
  } catch (error) {
    console.error('Erreur AuthGuard:', error);
    return router.createUrlTree(['/onboarding']);
  }
};
