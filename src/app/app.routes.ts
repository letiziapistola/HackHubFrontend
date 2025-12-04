import { Routes } from '@angular/router';
import { roleGuard } from './core/guards/role-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    /*{
    path: 'judge/evaluate',
    canActivate: [roleGuard('JUDGE')],
    loadComponent: () => import('./features/judge/evaluate/evaluate')
    }
    */
   {
    path: 'home',
    loadComponent: () => import('./features/pages/home/home').then(m => m.Home),
   },
   {
       path: '**',
       redirectTo: 'home'
   }
];
