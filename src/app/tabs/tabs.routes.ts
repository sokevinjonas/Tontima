import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'members',
        loadComponent: () =>
          import('../pages/members/members.page').then((m) => m.MembersPage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('../pages/account/account.page').then((m) => m.AccountPage),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
];
