import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'ubot-matching',
    loadChildren: () =>
      import('ubot-matching/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'ubot-epay',
    loadChildren: () => import('ubot-epay/Module').then((m) => m.AuthModule),
  },
  {
    path: 'ubot-invoice',
    loadChildren: () =>
      import('ubot-invoice/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
