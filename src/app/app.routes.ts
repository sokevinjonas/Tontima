import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [
    {
    path: 'signup',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  // routes proteges
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [authGuard],
  },

  {
    path: 'create-tontine',
    loadComponent: () =>
      import('./pages/create-tontine/create-tontine.page').then(
        (m) => m.CreateTontinePage
      ),
      canActivate: [authGuard],
  },
  {
    path: 'tontine-detail',
    loadComponent: () =>
      import('./pages/tontine-detail/tontine-detail.page').then(
        (m) => m.TontineDetailPage
      ),
      canActivate: [authGuard],
  },

  {
    path: 'show-members/:id',
    loadComponent: () => import('./pages/show-members/show-members.page').then( m => m.ShowMembersPage),
    canActivate: [authGuard],
    
  },
  {
    path: 'invited-person',
    loadComponent: () => import('./pages/invited-person/invited-person.page').then( m => m.InvitedPersonPage),
    canActivate: [authGuard],
  }
  
];
