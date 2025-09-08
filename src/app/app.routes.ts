import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
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
];
