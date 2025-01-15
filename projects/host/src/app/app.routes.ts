import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'micro-front',
        loadChildren: () => import('micro-front/ShowinfoModule').then((m) => m.ShowinfoModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
