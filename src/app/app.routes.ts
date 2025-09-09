import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'create-tontine',
    loadComponent: () =>
      import('./pages/create-tontine/create-tontine.page').then(
        (m) => m.CreateTontinePage
      ),
  },
  {
    path: 'tontine-detail',
    loadComponent: () =>
      import('./pages/tontine-detail/tontine-detail.page').then(
        (m) => m.TontineDetailPage
      ),
  },
  {
    path: 'signup',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'show-members/:id',
    loadComponent: () => import('./pages/show-members/show-members.page').then( m => m.ShowMembersPage)
  },
  {
    path: 'invited-person',
    loadComponent: () => import('./pages/invited-person/invited-person.page').then( m => m.InvitedPersonPage)
  }
  
];
