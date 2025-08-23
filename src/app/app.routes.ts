import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'phone-login',
    pathMatch: 'full',
  },
  {
    path: 'phone-login',
    loadComponent: () => import('./pages/auth/phone-login/phone-login.page').then( m => m.PhoneLoginPage)
  },
  {
    path: 'otp-verification',
    loadComponent: () => import('./pages/auth/otp-verification/otp-verification.page').then( m => m.OtpVerificationPage)
  },
  {
    path: 'secret-code',
    loadComponent: () => import('./pages/auth/secret-code/secret-code.page').then( m => m.SecretCodePage)
  },
];
