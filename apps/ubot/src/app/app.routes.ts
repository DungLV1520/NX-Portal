import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ubot-epay',
    loadChildren: () =>
      import('ubot-epay/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ubot-invoice',
    loadChildren: () =>
      import('ubot-invoice/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
