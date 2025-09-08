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
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'continue-with-email',
    loadComponent: () =>
      import('./continue-with-email/continue-with-email.page').then(
        (m) => m.ContinueWithEmailPage
      ),
  },
  {
    path: 'detail-members/:id',
    loadComponent: () =>
      import('./pages/detail-members/detail-members.page').then((m) => m.DetailMembersPage)
  }
  
];
