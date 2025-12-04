import { Routes } from '@angular/router';
import { roleGuard } from './core/guards/role-guard';

export const routes: Routes = [
   {
    path: 'home',
    loadComponent: () => import('./features/pages/home/home').then(m => m.Home),
   },
];
