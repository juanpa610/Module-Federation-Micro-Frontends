import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('micro-front/CardComponent').then((C) => C.CardComponent)
    },
    // {
    //     path: '',
    //     redirectTo: '',
    //     pathMatch: 'full'
    // },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
