import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
// import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  // { path: 'login',    component: LoginComponent },
  { path: '**', component: NoContentComponent },
];
